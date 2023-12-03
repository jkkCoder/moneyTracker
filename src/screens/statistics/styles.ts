import {StyleSheet, Dimensions} from "react-native"
import { scale } from "../../common/utils"

export default StyleSheet.create({
    container: {

    },
    pieChartContainer: {flex:1, justifyContent:'center'},
    chart: {
        marginVertical: scale(18),
        borderRadius: scale(8),
        alignSelf: 'center',
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
    },
    barchartContainer:{
        transform:[{ rotate: '90deg'}],
        width: Dimensions.get('screen').height - scale(260),
        height: Dimensions.get('screen').width,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:scale(75),
        right: scale(-66),
    }
})