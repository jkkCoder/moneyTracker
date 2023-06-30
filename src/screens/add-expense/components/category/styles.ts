import {StyleSheet} from "react-native"
import { scale } from "../../../../common/utils"
import colors from "../../../../common/colors"

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: colors.white,
        padding: scale(16),
        borderTopLeftRadius: scale(8),
        borderTopRightRadius: scale(8),
        width: '100%',
      },
      modalTitle: {
        fontSize: scale(18),
        fontWeight: 'bold',
        marginBottom: scale(16),
      },
      gridContainer: {
        marginBottom: scale(16),
      },
      row: {
        flexDirection: 'row',
        marginBottom: scale(8),
      },
      gridItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: scale(16),
        borderWidth: scale(1),
        borderColor: 'gray',
        borderRadius: scale(8),
        marginHorizontal: scale(4),
      },
      gridItemText: {
        fontSize: scale(8),
      },
      closeButton: {
        backgroundColor: colors.lightblue,
        padding: scale(10),
        borderRadius: scale(4),
      },
      closeButtonText: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})