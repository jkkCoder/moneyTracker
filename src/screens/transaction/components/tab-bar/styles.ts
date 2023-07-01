import {StyleSheet} from "react-native"
import colors from "../../../../common/colors"
import { scale } from "../../../../common/utils"

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        paddingVertical: scale(10),
    },
    btmColor: {
        borderBottomColor: colors.lightblue,
        borderBottomWidth: scale(1.5)
    }
})