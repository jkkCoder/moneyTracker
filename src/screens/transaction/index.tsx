import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import PaddingView from '../../common/components/padding-view'
import Trans from './components/trans'
import TransDetailsDaily from './components/trans-details-monthly'

const Transaction = () => {
  return (
    <PaddingView>
      <TransDetailsDaily month={6} year={2023}/>
    </PaddingView>
  )
}

export default Transaction