import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import styles from './styles'

interface Props {
  children: ReactNode
}

const PaddingView = ({children} : Props) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default PaddingView