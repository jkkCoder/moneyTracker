import { View, Text, Pressable,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from "./styles"
import { TransactionData } from '../Form'

interface Props{
    expenseType:string;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    setTransactionData: React.Dispatch<React.SetStateAction<TransactionData>>
}

const Category = ({expenseType, setModalVisible, setTransactionData}:Props) => {

    const handlePress = (label:string) => {
        setTransactionData(prev => ({ ...prev, category: label?.toLowerCase() }))
        setModalVisible(false)
    };

    const renderGridItem = (label:string) => {
        return (
            <Pressable
                style={styles.gridItem}
                onPress={() => handlePress(label)}
            >
                <Text style={styles.gridItemText}>{label}</Text>
            </Pressable>
        );
    };
    return (
        <Pressable onPress={() => setModalVisible(false)} style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Categories</Text>
                <View style={styles.gridContainer}>
                {
                    expenseType === 'Expense' ? <>
                        <View style={styles.row}>
                            {renderGridItem('Food')}
                            {renderGridItem('Social Life')}
                            {renderGridItem('Pets')}
                        </View>
                        <View style={styles.row}>
                            {renderGridItem('Transport')}
                            {renderGridItem( 'Card')}
                            {renderGridItem( 'Household')}
                        </View>
                        <View style={styles.row}>
                            {renderGridItem('Investment')}
                            {renderGridItem('Beauty')}
                            {renderGridItem('Health')}
                        </View>
                        <View style={styles.row}>
                            {renderGridItem('Education')}
                            {renderGridItem('Gift')}
                            {renderGridItem('Other')}
                        </View>
                    </> : <>
                        <View style={styles.row}>
                            {renderGridItem('Allowance')}
                            {renderGridItem('Salary')}
                            {renderGridItem('Petty cash')}
                        </View>
                        <View style={styles.row}>
                            {renderGridItem('Bonus')}
                            {renderGridItem('Other')}
                        </View>
                    </>
                }
                </View>
                <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
                >
                <Text style={styles.closeButtonText}>Close</Text>
                </Pressable>
            </View>
        </Pressable>
    )
}

export default Category