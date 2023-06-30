import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles';

interface Props {
    txt: string;
    selected: boolean;
    setExpenseType: React.Dispatch<React.SetStateAction<string>>;
    expenseType: string;
}

const TypeContainer = ({expenseType, setExpenseType, txt, selected}:Props) => {
  const pressHandler = () => {
    if(expenseType !== txt){
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