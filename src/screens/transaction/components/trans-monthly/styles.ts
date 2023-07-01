import {StyleSheet} from 'react-native';
import colors from '../../../../common/colors';
import { scale } from '../../../../common/utils';

export default StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        paddingHorizontal: scale(5),
        flexDirection: 'row',
        marginVertical: scale(5),
        borderWidth:scale(1),
        borderColor: colors.black,
        borderRadius: scale(5),
        paddingVertical: scale(10),
    },
    txt:{
        width: scale(80),
    },
    incomeContainer: {
        flexDirection: 'row',
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    greenTxt:{
        flex:1,
        color: colors.lightgreen
    },
    redTxt:{
        flex:1,
        color: colors.red,
    },
    blueTxt:{
        flex:1,
        color: colors.lightblue
    }

})