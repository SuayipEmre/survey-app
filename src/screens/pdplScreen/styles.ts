import { StyleSheet } from "react-native";
import commonStyles from "../../style/commonStyles"

export default StyleSheet.create({
    title: {
        ...commonStyles.boldText,
        fontSize: 14,
        marginVertical: 7,
    },

    content: {
        width: '80%',
        alignItems: 'center',
    },

})