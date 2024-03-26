import { StyleSheet } from "react-native"
import commonStyles from "../../style/commonStyles"

const base_style = StyleSheet.create({
    title_text: {
        fontSize: 12,
        lineHeight: 13.38,
    },

})

export default StyleSheet.create({
    container: {
        ...commonStyles.centerElementsInRow,
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
        ...commonStyles.mediumText,

    },
    aboutUsText: {
        ...base_style.title_text,
        fontWeight: '400',
        fontFamily: 'Comfortaa-Regular',
    },
    sub_text: {
        ...commonStyles.regularText,
        fontSize: 10,
        lineHeight: 11.15,
        marginTop: 4,
    },
    app_section_button:{
        ...commonStyles.centerElementsInRow,
        gap: 4,
        width: 200,
        justifyContent: 'flex-end',
        height: '100%'
    }
})