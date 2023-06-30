import {StyleSheet} from "react-native"
import colors from "../../../../common/colors"
import { scale } from "../../../../common/utils"

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    txt:{
        color: colors.black
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    incomeTxt:{
        color: colors.lightgreen,
    },
    expenseTxt:{
        color: colors.red
    },
    totalTxt:{
        color: colors.lightblue
    },
    divider:{
        height: scale(1),
        backgroundColor: colors.lightgrey,
        marginHorizontal: scale(-11),
    }
})