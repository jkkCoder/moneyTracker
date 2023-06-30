import {StyleSheet} from 'react-native'
import { scale } from '../../../../common/utils'
import colors from '../../../../common/colors'

export default StyleSheet.create({
    formGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },
      label: {
        flex: 1,
        fontSize: scale(12),
        fontWeight: 'bold',
      },
      divider:{
        backgroundColor: colors.lightestgrey,
        marginHorizontal: scale(-11),
        height: scale(20),
      },
      dtTxt:{
        color: colors.black,
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: scale(7),
      },
      input: {
        flex: 2,
        height: scale(40),
        borderColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: scale(10),
      },
})