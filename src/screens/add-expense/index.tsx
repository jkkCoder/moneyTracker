import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import PaddingView from '../../common/components/padding-view'
import ScreenHeader from '../../common/components/screen-header'
import TypeContainer from './components/TypeContainer'
import styles from './styles'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import Form from './components/Form'
import moment from 'moment'
import { addSingleData, deleteDataById, editDataById } from '../../common/utils'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface AddExpenseParams {
  method: string;
  id?: number;
  date?:string;
  category?: string;
  title?: string;
  description?: string;
  amount?: string;
  type ?: string;
}

type AddExpenseRouteProp = RouteProp<Record<string, AddExpenseParams>, string>;

const AddExpense = () => {
  const route = useRoute<AddExpenseRouteProp>()
  const {method,id,date,category,title,description,amount,type} = route?.params
  const navigation = useNavigation()
  const [expenseType, setExpenseType] = useState(type || 'Expense') // Expense/Income
  const [transactionData, setTransactionData] = useState({
    date : date ? moment(date).format('yyyy-MM-DD') : moment().format("yyyy-MM-DD") ,
    category: category || "",
    type: type || "",
    title: title || "",
    description: description || "",
    amount: amount || "",
  })

  const disabled = transactionData?.category === '' || transactionData?.title === '' || transactionData?.amount === ''

  const saveHandler = async () => {
    if(method==="create"){  //save new data
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
      await editDataById(id, {
        id: id || Date.now(),   //always id will be passed, fallback case will never occur
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
    }
  }
  const deleteHandler =async () => {  // delete existing data
    await deleteDataById(id)
    navigation.goBack()
  }
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }}>
    
      <ScreenHeader title={expenseType} hasBack/>
      <PaddingView>
        <View style={styles.typeContainer}>
          <TypeContainer setTransactionData={setTransactionData} expenseType={expenseType} setExpenseType={setExpenseType} txt="Expense" selected={expenseType === 'Expense'} />
          <TypeContainer setTransactionData={setTransactionData} expenseType={expenseType} setExpenseType={setExpenseType} txt="Income" selected={expenseType === 'Income'} />
        </View>
        <View style={styles.formContainer}>
          <Form expenseType={expenseType} TransactionData={transactionData} setTransactionData={setTransactionData}/>
        </View>
        <View style={styles.btnContainer}>
          {
            method?.toLowerCase() !== 'create' && (
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
    </ScrollView>
    
  )
}

export default AddExpense