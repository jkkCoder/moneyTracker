import { Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import PaddingView from '../../common/components/padding-view'
import TransDetailsDaily from './components/trans-details-monthly'
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import moment from 'moment'
import TransactionDetailsHeader from './components/transaction-details-header'

const Transaction = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [month, setMonth] = useState<number>(0)
  const [year, setYear] = useState<number>(0)

  useEffect(() => {
    setMonth(Number(moment().format('M')))
    setYear(Number(moment().format('y')))
  
  },[])

  const handleNavigator = () => {
    navigation.navigate('addExpense',{
      type: 'create'
    })
  }
  return (
    <>
      <PaddingView>
        <TransactionDetailsHeader month={month} year={year}/>
        <TransDetailsDaily month={month} year={year}/>
        <Pressable onPress={handleNavigator} style={styles.addBtn}>
          <Text>Add Expense</Text>
        </Pressable>
      </PaddingView>
    </>
    
  )
}

export default Transaction