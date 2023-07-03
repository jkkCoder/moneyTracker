import { View, Text } from 'react-native'
import React from 'react'
import { TransactionInterface } from '../../../../common/interface';
import { useTransDetailsMonthly } from './hooks';
import TransMonthly from '../trans-monthly';
import { scale } from '../../../../common/utils';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
    transactionData: TransactionInterface[];
    year: number;
}
const TransDetailsMonthly = ({transactionData, year}: Props) => {
  const {transDetailsMonthly} = useTransDetailsMonthly(transactionData, year)
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      {
        [1,2,3,4,5,6,7,8,9,10,11,12].map(m => {
          return (
            <TransMonthly key={m} month={m} year={year} monthlyTransaction={transDetailsMonthly[m]}/>
          )
        })
      }
      <View style={{height: scale(60)}} />
    </ScrollView>
  )
}

export default TransDetailsMonthly