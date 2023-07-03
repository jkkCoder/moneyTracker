import {StyleSheet} from "react-native"
import { scale } from "../../common/utils"

export default StyleSheet.create({
    container: {

    },
    chart: {
        marginVertical: scale(18),
        borderRadius: scale(8),
        alignSelf: 'center',
        flexDirection: 'row'
    },
    dropDownContainer:{
        flexDirection: 'row',
    },
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    noTransaction:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})