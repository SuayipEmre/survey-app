import { Dimensions, StyleSheet } from "react-native"
import commonStyles from "../../style/commonStyles"

const{width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        width : width,
        height : height,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        ...commonStyles.boldText,
    },
})