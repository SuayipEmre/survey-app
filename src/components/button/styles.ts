import { StyleSheet } from "react-native";
import commonStyles from "../../style/commonStyles";

export default StyleSheet.create({
    button: {
        width: '40%',
        padding: 12,
        alignItems: 'center',
        borderRadius: 20,
    },
    button_text: {
       ...commonStyles.semiBoldText,
        color: '#fff',
        fontSize: 14,
    },
})