import { Dimensions } from 'react-native';
import { ExpenseResponse, TransactionInterface } from './interface';
import SQLite from 'react-native-sqlite-storage';

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

export const getDatabaseConnection = async () => {
    return await SQLite.openDatabase({ name: 'Expense.db'});
}

export const createTable = async () => {
    const ExpenseDB = await getDatabaseConnection()
    ExpenseDB.transaction((txn) => {
        txn.executeSql(
          "CREATE TABLE IF NOT EXISTS EXPENSE(id INTEGER PRIMARY KEY AUTOINCREMENT, date VARCHAR(20), category VARCHAR(20), type VARCHAR(20), title VARCHAR(30), description VARCHAR(50), amount INT(10), year INT(4), month INT(2), day INT(2) )");
    });
}

export const getData = async (): Promise<ExpenseResponse> => {
    const db = await getDatabaseConnection()
    return new Promise((res) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM EXPENSE',
                [],
                (_, results) => {
                    var temp : TransactionInterface[] = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    res({data: temp, success: true})
                },
                () => {
                    res({data: [], success: false})
                }
            );
        });
    })
}; 

export const addSingleData = async (data : TransactionInterface): Promise<ExpenseResponse> => {
    
    const db = await getDatabaseConnection()

    return new Promise((res) => {
        db.transaction(function (tx) {
            tx.executeSql(
                'INSERT INTO EXPENSE (date , category, type, title, description, amount, year, month, day) VALUES (?,?,?,?,?,?,?,?,?)',
                [data?.date, data?.category, data?.type, data?.title, data?.description, data?.amount, data?.year, data?.month, data?.day],
                (_, results) => {
                if (results.rowsAffected > 0) {
                    res({success: true})
                } else {
                    res({success: false})
                }
                },
                () => {
                    res({success: false})
                }
            );
        });
    })
}

export const deleteDataById = async(id:number|undefined): Promise<ExpenseResponse>  => {
    if(!id){
        return {
            success: false,
        }
    }
    const db = await getDatabaseConnection()
    return new Promise((res) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  EXPENSE where id=?',
                [id],
                (_, results) => {
                if (results.rowsAffected > 0) {
                    res({success: true})
                } else {
                    res({success: false})
                }
                },
                () => {
                    res({success: false})
                }
            );
        });
    })
}

export const editDataById = async(id:number|undefined, data : TransactionInterface): Promise<ExpenseResponse>  => {
    if(!id){
        return { success: false }
    }
    const db = await getDatabaseConnection()
    return new Promise((res) => {
        db.transaction((tx) => {
            tx.executeSql(
              'UPDATE EXPENSE set date=? , category=?, type=?, title=?, description=?, amount=?, year=?, month=?, day=? where id=?',
              [data?.date, data?.category, data?.type, data?.title, data?.description, data?.amount, data?.year, data?.month, data?.day, id],
              (_, results) => {
                if (results.rowsAffected > 0) {
                    res({success: true})
                } else {
                    res({success: false})
                }
              },
              () => {
                res({success: false})
              }
            );
        });
    })
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
