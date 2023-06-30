import { Text, Pressable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import PaddingView from '../../common/components/padding-view'
import TransDetailsDaily from './components/trans-details-monthly'
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import moment from 'moment'
import TransactionDetailsHeader from './components/transaction-details-header'
import ScreenHeader from '../../common/components/screen-header'
import DropDown from './components/DropDown'
import { NumToMonth } from '../../common/utils'

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

  const monthOptions = [
      {key: 1, label: "Jan", value: 1}, 
      {key: 2, label: "Feb", value: 2},
      {key: 3, label: "Mar", value: 3},
      {key: 4, label: "Apr", value: 4},
      {key: 5, label: "May", value: 5},
      {key: 6, label: "Jun", value: 6},
      {key: 7, label: "Jul", value: 7},
      {key: 8, label: "Aug", value: 8},
      {key: 9, label: "Sep", value: 9},
      {key: 10, label: "Oct", value: 10},
      {key: 11, label: "Nov", value: 11},
      {key: 12, label: "Dec", value: 12}
    ]

    const yearOptions = [];
    const currentYear = Number(moment().format('y'))
    for (let yr = 2010; yr <= currentYear; yr++) {
      yearOptions.push({ key: yr, label: yr.toString() , value: yr});
    }
  return (
    <>
      <ScreenHeader title='Transactions'/>
      <PaddingView>
        <View style={styles.dropDownContainer}>
          <DropDown options={monthOptions} selectedValue={NumToMonth[month]} onValueChange={setMonth}/>
          <DropDown options={yearOptions} selectedValue={year.toString()} onValueChange={setYear}/>
        </View>
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