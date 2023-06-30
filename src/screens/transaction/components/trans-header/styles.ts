import { StyleSheet } from "react-native"
import { scale } from "../../../../common/utils"

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: scale(5),
    },
    dayContainer: {
        backgroundColor: '#989595',
        marginLeft: scale(10),
        borderRadius: scale(2),
        paddingHorizontal: scale(8),
        paddingVertical: scale(2)
    }
})