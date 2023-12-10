import {StyleSheet} from "react-native"
import { scale } from "../../common/utils"
import colors from "../../common/colors"

export default StyleSheet.create({
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formContainer: {
        marginVertical: scale(4)
    },
    saveBtn: {
        backgroundColor: colors.lightblue,
        minWidth: scale(80),
        maxWidth: scale(120),
        padding: scale(10),
        alignItems:'center',
        borderRadius: scale(5),
        marginHorizontal: scale(10),
    },
    btnContainer:{
        flexDirection: 'row',
    },
    btnTxt:{
        color: colors.white,
        fontSize: scale(16),
    },
    disabledBtn:{
        opacity: 0.5
    }
})