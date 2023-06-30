import {StyleSheet} from "react-native"
import { scale } from "../../common/utils"

export default StyleSheet.create({
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formContainer: {
        marginVertical: scale(20)
    },
})