import { Pressable, Text } from 'react-native'
import React from 'react'
import styles from './styles';

interface Props {
    id:number;
    tabIndex:number;
    title:string;
    selected:boolean;
    setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const TabBar = ({id, tabIndex, setTabIndex, title,selected}:Props) => {
    const pressHandler = () => {
        if(id !== tabIndex){
            setTabIndex(id)
        }
    }
    return (
        <Pressable onPress={pressHandler} style={[styles.container, selected ? styles.btmColor : {}]}>
        <Text>{title}</Text>
        </Pressable>
    )
}

export default TabBar