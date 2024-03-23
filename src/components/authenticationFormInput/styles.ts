import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({

    text: {
        fontWeight: '400',
        fontSize: 8,
        fontFamily :'Comfortaa-Regular',
    },




})


export default StyleSheet.create({
    container: {
        width: '70%',
        gap: 6,
    },
    label_text: {
        fontFamily :'Comfortaa-SemiBold',
        fontWeight: '600',
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
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    forgot_password_text: {
        ...base_style.text,
        alignSelf: 'flex-end',
    },
});
