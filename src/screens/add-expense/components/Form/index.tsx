import { View, Text, TextInput, Modal, Pressable,TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import moment from 'moment';
import Category from '../category';

export interface TransactionData {
    date: string;
    category: string;
    type: string;
    title: string;
    description: string;
    amount: string;
}

interface Props {
    expenseType: string;
    TransactionData: TransactionData;
    setTransactionData: React.Dispatch<React.SetStateAction<TransactionData>>
}

const Form = ({expenseType, TransactionData, setTransactionData} : Props) => {
  const [open,setOpen] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          onPressIn={() => setOpen(true)}
          onPressOut={() => setOpen(true)}
          style={styles.input}
          placeholder="Enter category"
          value={TransactionData?.date}
        />
        <DatePicker
            modal
            mode="date"
            open={open}
            date={new Date(TransactionData?.date)}
            onConfirm={(date) => {
                setOpen(false)
                setTransactionData(prev => ({ ...prev, date: moment(date).format('YYYY-MM-DD') }))
            }}
            onCancel={() => {
                setOpen(false)
            }}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          onPressIn={() => setModalVisible(true)}
          onPressOut={() => setModalVisible(true)}
          placeholder="Enter category"
          value={TransactionData?.category}
          onChangeText={text => setTransactionData(prev => ({ ...prev, category: text }))}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={TransactionData?.title}
          onChangeText={text => setTransactionData(prev => ({ ...prev, title: text }))}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          inputMode='numeric'
          placeholder="Enter amount"
          value={TransactionData?.amount}
          onChangeText={text => {
            if(!isNaN(Number(text)))
                setTransactionData(prev => ({ ...prev, amount: text }))}
          }
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.formGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={TransactionData?.description}
          onChangeText={text => {
            setTransactionData(prev => ({ ...prev, description: text }))}
          }
        />
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <Category expenseType={expenseType} setTransactionData={setTransactionData} setModalVisible={setModalVisible}/>
      </Modal>
    </>
  )
}

export default Form