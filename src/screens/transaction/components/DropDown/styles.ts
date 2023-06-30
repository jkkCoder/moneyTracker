import {StyleSheet} from "react-native"
import { scale } from "../../../../common/utils"
import colors from "../../../../common/colors"

export default StyleSheet.create({
    container:{
        marginHorizontal: scale(5),
        marginVertical: scale(4),
    },
    selectedContainer:{
        width: scale(80),
        justifyContent:'center',
        alignItems:'center',
        marginVertical: scale(5),
        borderWidth:scale(1),
        borderColor: colors.lightgrey,
        borderRadius: scale(5),
        flexDirection:'row',
        paddingLeft: scale(10),
        paddingRight: scale(5),
    },
    dropDownIcon: {
        flex:1,
        textAlign: 'right',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '80%',
        maxHeight: '60%',
      },
      option: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }, 
})