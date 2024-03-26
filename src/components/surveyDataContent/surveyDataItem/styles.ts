import { StyleSheet } from "react-native";
import commonStyles from "../../../style/commonStyles";
export default StyleSheet.create({
    information_item: {
        width: '90%',
        height: 61,
        borderRadius:5,
        gap:9,
        marginTop:12,
        padding:9,
      },
      information_item_top_content: {
        ...commonStyles.centerElementsInRow,
        justifyContent: 'space-between'
      },
      information_item_bottom_content:{
        ...commonStyles.centerElementsInRow,
        gap:6,
      },
      date: {
        ...commonStyles.lightText,
        fontSize: 10,
        lineHeight: 11.15,
      },
      time_text: {
        fontSize: 10,
        ...commonStyles.lightText,
        lineHeight: 11.15,
       
      },
    
})