import { View, Text } from 'react-native'
import React from 'react'
import { TransactionInterface } from '../../../../common/interface';
import styles from './styles';
import { NumToMonth, currency } from '../../../../common/utils';
import { useTransactionDetailsHeader } from '../transaction-details-header/hooks';

interface Props {
    month: number;
    year:number;
    monthlyTransaction: TransactionInterface[]
}

const TransMonthly = ({month,year, monthlyTransaction}:Props) => {
    const expense = monthlyTransaction?.reduce((acc,item) => {
        if(item?.type?.toLowerCase() === 'expense'){
            acc += item?.amount
        }
        return acc;
    },0)

    const income = monthlyTransaction?.reduce((acc,item) => {
        if(item?.type?.toLowerCase() === 'income'){
            acc += item?.amount
        }
        return acc;
    },0)

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>{NumToMonth[month]} {year}</Text>
            <View style={styles.incomeContainer}>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.greenTxt}>{currency} {income}</Text>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.redTxt}>{currency} {expense}</Text>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.blueTxt}>{currency} {income-expense}</Text>
            </View>
        </View>
    )
}

export default TransMonthly