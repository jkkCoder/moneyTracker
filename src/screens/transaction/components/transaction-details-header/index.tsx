import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TransactionInterface } from '../../../../common/interface';
import { currency, getData } from '../../../../common/utils';
import { useTransactionDetailsHeader } from './hooks';
import styles from './styles';

interface Props {
    transactionData: TransactionInterface[]
    month: number;
    year:number
}

const TransactionDetailsHeader = ({transactionData, month, year}:Props) => {

  const {income,expense} = useTransactionDetailsHeader(transactionData,month,year)


  return (
    <>
        <View style={styles.divider} />
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.txt}>Income</Text>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.incomeTxt}>{currency} {income}</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.txt}>Expense</Text>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.expenseTxt}>{currency} {expense}</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.txt}>Total</Text>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.totalTxt}>{currency} {income - expense}</Text>
            </View>
        </View>
        <View style={styles.divider} />
    </>
    
  )
}

export default TransactionDetailsHeader