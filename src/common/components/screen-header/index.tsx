import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface Props {
    hasBack? : boolean;
    title : string;
}

const ScreenHeader = ({hasBack = false, title}: Props) => {
  const navigation = useNavigation()
  const backHandler = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      {hasBack && <Text style={styles.back} onPress={backHandler}>Go Back</Text>}
      <Text style={[styles.txt,  hasBack? styles.hasBack : styles.notHasBack]}>{title}</Text>
    </View>
  )
}

export default ScreenHeader