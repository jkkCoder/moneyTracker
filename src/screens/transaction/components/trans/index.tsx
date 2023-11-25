import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { capitalizeFirstLetter, currency } from '../../../../common/utils'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {
    id: number,
    category: string,
    title: string,
    date: string,
    description: string,
    amount: number,
    type: string
}

const Trans = ({id, category, date, title, description, amount, type}: Props) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const clickHandler = () => {
    navigation.navigate('addExpense',{
      method: 'Edit',
      id,
      date,
      category,
      title,
      description,
      amount: amount?.toString(),
      type: capitalizeFirstLetter(type?.toLowerCase())
    })
  }
  return (
    <Pressable style={styles.container} onPress={clickHandler}>
      <Text numberOfLines={1} style={styles.category}>{category}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        {!!description?.length && <Text numberOfLines={1}>{description}</Text>}
      </View>
      <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.amount, type?.toLowerCase() === 'expense' ? styles.redTxt : styles.greenTxt]}>{currency} {amount}</Text>
    </Pressable>
  )
}

export default Trans