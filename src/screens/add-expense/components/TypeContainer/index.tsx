import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles';
import { TransactionInterface } from '../../../../common/interface';
import { TransactionData } from '../Form';

interface Props {
    setTransactionData?: React.Dispatch<React.SetStateAction<TransactionData>>
    txt: string;
    selected: boolean;
    setExpenseType: React.Dispatch<React.SetStateAction<string>>;
    expenseType: string;
}

const TypeContainer = ({ setTransactionData, expenseType, setExpenseType, txt, selected}:Props) => {
  const pressHandler = () => {
    if(expenseType !== txt){
        setTransactionData && setTransactionData(prev => ({ ...prev, category: ""}))
        setExpenseType(txt)
    }
  }
  return (
    <Pressable onPress={pressHandler} style={[styles.container, selected? styles.selectedContainer: {}]}>
      <Text style={[selected ? styles.selectedTxt : {}]}>{txt}</Text>
    </Pressable>
  )
}

export default TypeContainer