import { Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import PaddingView from '../../common/components/padding-view'
import TransDetailsDaily from './components/trans-details-monthly'
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const Transaction = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleNavigator = () => {
    navigation.navigate('addExpense',{
      type: 'create'
    })
  }
  return (
    <>
      <PaddingView>
        <TransDetailsDaily month={6} year={2023}/>
        <Pressable onPress={handleNavigator} style={styles.addBtn}>
          <Text>Add Expense</Text>
        </Pressable>
      </PaddingView>
    </>
    
  )
}

export default Transaction