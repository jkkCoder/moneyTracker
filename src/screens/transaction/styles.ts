import { StyleSheet } from "react-native";
import colors from "../../common/colors";
import { scale } from "../../common/utils";

export default StyleSheet.create({
    addBtn: {
        backgroundColor: colors.lightblue,
        width: scale(120),
        height: scale(35),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: scale(20),
        right: scale(20),
        borderRadius: scale(5)
    },
    dropDownContainer:{
        flexDirection: 'row',
    },
    tabContainer:{
        flexDirection: 'row',
    },
})