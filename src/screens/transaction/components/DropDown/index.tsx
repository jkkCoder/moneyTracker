import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from './styles';
import Entypo from "react-native-vector-icons/Entypo"

interface Props {
    options: {key:number; label:string; value:number}[];
    selectedValue: string;
    onValueChange: React.Dispatch<React.SetStateAction<number>>

}

const DropDown = ({ options, selectedValue, onValueChange }:Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleValueChange = (value:number) => {
    onValueChange(value);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectedContainer} onPress={toggleModal}>
        <Text>{selectedValue}</Text>
        <View style={styles.dropDownIcon}>
          <Entypo name="chevron-down" size={20} color="black"/>
        </View>
       
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <ScrollView>
                  {options.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={styles.option}
                      onPress={() => handleValueChange(option.value)}
                    >
                      <Text>{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default DropDown