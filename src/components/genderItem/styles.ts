import { StyleSheet } from "react-native";
import commonStyles from "../../style/commonStyles"
export default StyleSheet.create({
    container: {
        width: '40%',
        paddingVertical: 14,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    genre_text: {
        ...commonStyles.semiBoldText,
        fontSize: 12,
    }

})