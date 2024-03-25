import { StyleSheet } from "react-native"

const base_style = StyleSheet.create({

    title_text: {
        fontSize: 12,
        lineHeight: 13.38,
    },




})

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 61,
        paddingHorizontal: 7,
        borderRadius: 5,

    },

    section_lef_side: {
        height: '100%',
        justifyContent: 'center',
    },

    title: {
        ...base_style.title_text,
        fontWeight: '500',
        fontFamily: 'Comfortaa-Medium',

    },
    aboutUsText: {
        ...base_style.title_text,
        fontWeight: '400',
        fontFamily: 'Comfortaa-Regular',
    },
    sub_text: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 11.15,
        marginTop: 4,
    },
    app_section_button:{
        flexDirection: 'row',
        gap: 4,
        width: 200,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%'
    }
})