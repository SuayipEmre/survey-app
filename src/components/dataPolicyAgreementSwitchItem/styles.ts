import { StyleSheet } from "react-native";
import commonStyles from "../../style/commonStyles"

export default StyleSheet.create({
    container: {
        width: '100%',
        ...commonStyles.centerElementsInRow,
        gap: 8,
        marginVertical: 10,
    },
    text: {
        ...commonStyles.regularText,
        width:'80%',
        fontWeight: '400',
        fontSize: 12,
        textAlign:'left',
    },
    agree_text:{ fontWeight: '700', marginLeft:4, fontFamily :'Comfortaa-Bold' },

})