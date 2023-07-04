import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';
import { TransactionInterface } from './interface';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MAX_WIDTH = 320
const MAX_HEIGHT = 620

export const scale = (size:number) => {
    return size * (width / MAX_WIDTH)
}

export const verticalScale = (size:number) => {
    return size * (height / MAX_HEIGHT)
}

export const currency = '₹'


interface MonthMapping {
    [key: number]: string;
}
export const NumToMonth:MonthMapping = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct', 
    11: 'Nov', 
    12: 'Dec'
}

export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('data');
        return {
        data: value ? JSON.parse(value) : [],
        success: true
        }
    } catch (e) {
        return {
            data: [],
            success: false,
            errorMsg : e
        }
    }
}; 

export const setData = async (data : TransactionInterface) => {
    try {
        await AsyncStorage.setItem('data', JSON.stringify(data));
        return {
            success: true,
        }
    } catch (e) {
        return {
            success: false,
        }
    }
}

export const addSingleData = async (data : TransactionInterface) => {
    try {
        const value = await AsyncStorage.getItem('data');
        const dt = value ? JSON.parse(value) : []
        const newDt = [ data , ...dt ]
        await AsyncStorage.setItem('data', JSON.stringify(newDt));
        return {
            success: true,
        }
    } catch (e) {
        return {
            success: false,
        }
    }
}

export const deleteDataById = async(id:number|undefined) => {
    try {
        if(!id){
            return {
                success: false,
            }
        }
        const value = await AsyncStorage.getItem('data');
        const dt: TransactionInterface[] = value ? JSON.parse(value) : []
        const newDt = dt?.filter( d=> d?.id !== id)
        await AsyncStorage.setItem('data', JSON.stringify(newDt));
        return {
            success: true,
        }
    } catch (e) {
        return {
            success: false,
        }
    }
}

export const editDataById = async(id:number|undefined, data : TransactionInterface) => {
    try {
        if(!id){
            return {
                success: false,
            }
        }
        const value = await AsyncStorage.getItem('data');
        const dt: TransactionInterface[] = value ? JSON.parse(value) : []
        const dataIndex = dt?.findIndex( d => d?.id === id)

        dt[dataIndex] = {...data}
        await AsyncStorage.setItem('data', JSON.stringify(dt));
        return {
            success: true,
        }
    } catch (e) {
        return {
            success: false,
        }
    }
}

export const capitalizeFirstLetter = (str: string) => {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export const pieColors = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0'
  ];

export const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
