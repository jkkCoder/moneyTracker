import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { currency } from '../../../../common/utils'

interface Props {
    id: number,
    category: string,
    title: string,
    description: string,
    amount: number,
    type: string
}

const Trans = ({id, category, title, description, amount, type}: Props) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.category}>{category}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text numberOfLines={1}>{description}</Text>
      </View>
      <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.amount, type?.toLowerCase() === 'expense' ? styles.redTxt : styles.greenTxt]}>{currency} {amount}</Text>
    </View>
  )
}

export default Trans