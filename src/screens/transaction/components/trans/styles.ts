import { StyleSheet } from "react-native";
import { scale } from "../../../../common/utils";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingHorizontal: scale(5),
        flexDirection: 'row',
        marginVertical: scale(2),
        borderWidth:scale(1),
        borderColor: 'black',
        borderRadius: scale(5),
    },
    category: {
        width: '23%',
        alignSelf: 'center',
    },
    titleContainer: {
        width:'51%',
    },
    title:{
        color: 'black',
        fontWeight: 'bold'
    },
    amount: {
        flex:1,
        alignSelf: 'center',
        textAlign: 'right'
    },
    greenTxt: {
        color: 'lightgreen'
    },
    redTxt: {
        color: 'red',
    }
})