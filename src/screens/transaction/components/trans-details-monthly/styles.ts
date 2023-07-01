import {StyleSheet} from "react-native"
import { scale, verticalScale } from "../../../../common/utils"

export default StyleSheet.create({
    noData:{
        justifyContent:'center',
        alignItems: 'center',
        height: verticalScale(450)
    },
    empty:{
        height: scale(200),
    }
})