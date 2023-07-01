import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import PaddingView from '../../common/components/padding-view'
import ScreenHeader from '../../common/components/screen-header'
import TypeContainer from './components/TypeContainer'
import styles from './styles'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import Form from './components/Form'
import moment from 'moment'
import { addSingleData } from '../../common/utils'

interface AddExpenseParams {
  type: string;
}

type AddExpenseRouteProp = RouteProp<Record<string, AddExpenseParams>, string>;

const AddExpense = () => {
  const route = useRoute<AddExpenseRouteProp>()
  const {type} = route?.params
  const navigation = useNavigation()
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

  const disabled = transactionData?.category === '' && transactionData?.title === '' && transactionData?.amount === ''

  const saveHandler = async () => {
    if(type==="create"){  //save new data
      await addSingleData({
        id: Date.now(),
        date: transactionData?.date,
        category: transactionData?.category,
        type: expenseType?.toLowerCase(),
        title: transactionData?.title,
        description: transactionData?.description,
        amount: Number(transactionData?.amount),
        year: Number(moment(transactionData?.date).format('Y')),
        month: Number(moment(transactionData?.date).format('M')),
        day: Number(moment(transactionData?.date).format('D'))
      })
      navigation.goBack()
    }else{    //edit the data

    }
  }
  const deleteHandler = () => {
    // delete existing data
  }
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
        <View style={styles.btnContainer}>
          {
            type?.toLowerCase() !== 'create' && (
              <Pressable style={styles.saveBtn} onPress={deleteHandler}>
                <Text style={styles.btnTxt}>Delete</Text>
              </Pressable>
            )
          }
          <Pressable disabled={disabled}  style={[styles.saveBtn, disabled ? styles.disabledBtn : {}]} onPress={saveHandler}>
            <Text style={styles.btnTxt}>Save</Text>
          </Pressable>
        </View>
      </PaddingView>
    </>
    
  )
}

export default AddExpense