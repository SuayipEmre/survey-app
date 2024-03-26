import { StyleSheet } from "react-native";
import commonStyles from "../../style/commonStyles"


export default StyleSheet.create({
    content: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        gap: 12,
    },
    button: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        borderRadius: 10,
    },
    button_text: {
        fontSize: 20,
        ...commonStyles.boldText,
    },
})