import { Dimensions, StyleSheet } from "react-native";
import commonStyles from "../../style/commonStyles";

const base_style = StyleSheet.create({

    text: {
        ...commonStyles.regularText,
        fontSize: 8,
    },




})


const {height} = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        width: '70%',
        gap: 6,
    },
    label_text: {
       ...commonStyles.semiBoldText,
        fontSize: 12,
    },
    info_text: {
        ...base_style.text,
    },
    icon: {
        position: 'absolute',
        right: 10,
        bottom: '40%',
    },
    input: {
        height: height * 0.05,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    forgot_password_text: {
        ...base_style.text,
        alignSelf: 'flex-end',
    },
});
