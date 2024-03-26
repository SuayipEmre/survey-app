import { StyleSheet } from "react-native";
import commonStyles from "../../style/commonStyles";

export default StyleSheet.create({
    survey_completed_container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        gap : 12,
        
      },

      top_content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        gap:8,
      },
      completed_text:{
        fontSize : 20,
        lineHeight :22.3,
        textAlign :'center',
        ...commonStyles.semiBoldText,
        
      },
      creatingData:{
        fontSize :16,
        lineHeight :17.84,
        textAlign :'center'
      },
})