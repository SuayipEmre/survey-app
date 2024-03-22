import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content: {
        width: '70%',
        gap: 6,
    },
    label_text: {
        fontWeight: '600',
        fontSize: 12,
    },
    info_text: {
        fontWeight: '400',
        fontSize: 8,
    },
    icon: {
        position: 'absolute',
        right: 10,
        bottom: '40%',
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    forgot_password_text: {
        fontWeight: '400',
        fontSize: 8,
        alignSelf: 'flex-end',
    },
});
