import { StyleSheet } from "react-native"
import { scale } from "../../../../common/utils"
import colors from "../../../../common/colors"

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: scale(5),
    },
    dayContainer: {
        backgroundColor: colors.lightgrey,
        marginLeft: scale(10),
        borderRadius: scale(2),
        paddingHorizontal: scale(8),
        paddingVertical: scale(2)
    }
})