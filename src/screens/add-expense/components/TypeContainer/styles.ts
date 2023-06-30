import {StyleSheet} from "react-native"
import { scale } from "../../../../common/utils"
import colors from "../../../../common/colors"

export default StyleSheet.create({
    container: {
        height: scale(30),
        flex: 1,
        marginHorizontal: scale(20),
        marginVertical : scale(10),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(5),
        borderWidth: scale(1),
        backgroundColor: colors.lightestgrey,
    },
    selectedContainer: {
        backgroundColor: colors.white,
        borderColor: colors.lightblue,
        borderWidth: scale(1.5)
    },
    selectedTxt: {
        color: colors.lightblue,
        fontWeight: 'bold',
    }
})