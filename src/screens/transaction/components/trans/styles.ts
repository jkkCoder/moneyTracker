import { StyleSheet } from "react-native";
import { scale } from "../../../../common/utils";
import colors from "../../../../common/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        paddingHorizontal: scale(5),
        flexDirection: 'row',
        marginVertical: scale(2),
        borderWidth:scale(1),
        borderColor: colors.black,
        borderRadius: scale(5),
        height: scale(35),
    },
    category: {
        width: '23%',
        alignSelf: 'center',
    },
    titleContainer: {
        width:'51%',
        justifyContent:'center'
    },
    title:{
        color: colors.black,
        fontWeight: 'bold'
    },
    amount: {
        flex:1,
        alignSelf: 'center',
        textAlign: 'right'
    },
    greenTxt: {
        color: colors.lightgreen
    },
    redTxt: {
        color: colors.red
    }
})