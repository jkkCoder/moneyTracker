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