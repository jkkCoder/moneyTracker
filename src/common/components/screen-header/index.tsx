import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
      {hasBack &&(
        <Pressable onPress={backHandler} style={styles.backContainer}>
          <MaterialIcons name="arrow-back" size={25} color="white"/>
        </Pressable>
      ) }
      <Text style={[styles.txt,  hasBack? styles.hasBack : styles.notHasBack]}>{title}</Text>
    </View>
  )
}

export default ScreenHeader