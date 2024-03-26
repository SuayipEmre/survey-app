import { StyleSheet } from "react-native";
import commonStyles from "../../style/commonStyles";

export default StyleSheet.create({
    error_information_container:{
        alignItems:'center',
        gap : 6,
        backgroundColor:'red',
        paddingVertical : 6,
        paddingHorizontal : 4,
        borderRadius : 7,
      },

      text:{
        color: '#fff',
        ...commonStyles.lightText
      },
})