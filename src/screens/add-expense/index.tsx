import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import PaddingView from '../../common/components/padding-view'
import ScreenHeader from '../../common/components/screen-header'
import TypeContainer from './components/TypeContainer'
import styles from './styles'
import { useRoute } from '@react-navigation/native'
import { TransactionInterface } from '../../common/interface'
import Form from './components/Form'
import moment from 'moment'

const AddExpense = () => {
  const route = useRoute()
  const [expenseType, setExpenseType] = useState('Expense') // Expense/Income
  const [transactionData, setTransactionData] = useState({
    date : moment().format("yyyy-MM-DD") ,
    category: "",
    type: "",
    title: "",
    description: "",
    amount: "",
  })

  useEffect(() => {
    setTransactionData(prev => ({...prev, category: ''}))
  },[expenseType])
  return (
    <>
      <ScreenHeader title={expenseType} hasBack/>
      <PaddingView>
        <View style={styles.typeContainer}>
          <TypeContainer expenseType={expenseType} setExpenseType={setExpenseType} txt="Expense" selected={expenseType === 'Expense'} />
          <TypeContainer expenseType={expenseType} setExpenseType={setExpenseType} txt="Income" selected={expenseType === 'Income'} />
        </View>
        <View style={styles.formContainer}>
          <Form expenseType={expenseType} TransactionData={transactionData} setTransactionData={setTransactionData}/>
        </View>
      </PaddingView>
    </>
    
  )
}

export default AddExpense