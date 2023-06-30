import { View, Text } from 'react-native'
import React from 'react'
import moment from 'moment'
import styles from './styles'

interface Props {
    date: string
}

const TransHeader = ({date}:Props) => {

  const day = moment(date).format('ddd')
  const dt = moment(date).format("MMM Do");
  
  return (
    <View style={styles.container}>
      <Text>{dt}</Text>
      <View style={styles.dayContainer}>
        <Text>{day}</Text>
      </View>
    </View>
  )
}

export default TransHeader