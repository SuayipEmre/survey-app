import { StyleSheet } from "react-native"

const base_style = StyleSheet.create({


    option_text: {
        fontFamily: 'Comfortaa-SemiBold',
        fontWeight: '600',

    },
    option_button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingVertical: 6,
        borderRadius: 30,
        height: 40,
    },


})

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
    },

    question: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 20,
        lineHeight: 22.3,
        textAlign: 'center',
    },

    question_options_container: {
        flexDirection: 'row',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    inactive_option_button: {
        backgroundColor: '#EFEFFF',
        ...base_style.option_button
    },
    active_option_button: {
        ...base_style.option_button
    },
    active_question_option: {
        ...base_style.option_text,
        color: '#fff',
        lineHeight: 20.07,
    },
    inactive_question_option: {
        ...base_style.option_text,
        lineHeight: 17.84,
        fontSize: 16,
        opacity: 0.4,
    }
})