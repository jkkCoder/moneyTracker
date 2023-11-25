import { Text, Pressable, View } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import styles from './styles'
import PaddingView from '../../../common/components/padding-view'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import moment from 'moment'
import TransactionDetailsHeader from '../components/transaction-details-header'
import DropDown from '../components/DropDown'
import { getData } from '../../../common/utils'
import { TransactionInterface } from '../../../common/interface'
import { useTransactionDetailsHeader } from '../components/transaction-details-header/hooks'
import TransDetailsMonthly from '../components/trans-details-monthly'

const TransactionMonthly = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [month, setMonth] = useState<number>(0)
  const [year, setYear] = useState<number>(0)
  const [transactionData, setTransactionData] = useState<TransactionInterface[]>([])

  const {incomeYearly, expenseYearly} = useTransactionDetailsHeader(transactionData,month,year)

  useFocusEffect(
    useCallback(() => {  
      const fetchData = async () => {
        const data = await getData()
        if(data?.success){
          setTransactionData(data?.data || [])
        }
      }
      fetchData()
    }, [])
  );

  useEffect(() => {
    setMonth(Number(moment().format('M')))
    setYear(Number(moment().format('y')))
  },[])

  const handleNavigator = () => {
    navigation.navigate('addExpense',{
      method: 'create'
    })
  }

    const yearOptions = [];
    const currentYear = Number(moment().format('y'))
    for (let yr = 2010; yr <= currentYear; yr++) {
      yearOptions.push({ key: yr, label: yr.toString() , value: yr});
    }
  return (
    <>
      <PaddingView>
        <View style={styles.dropDownContainer}>
            <DropDown options={yearOptions} selectedValue={year.toString()} onValueChange={setYear}/>  
        </View>
        <TransactionDetailsHeader income={incomeYearly} expense={expenseYearly}/>
        <TransDetailsMonthly transactionData={transactionData} year={year} />
          
        
        <Pressable onPress={handleNavigator} style={styles.addBtn}>
          <Text>Add Expense</Text>
        </Pressable>
      </PaddingView>
    </>
    
  )
}

export default TransactionMonthly