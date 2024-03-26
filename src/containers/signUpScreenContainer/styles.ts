import { StyleSheet } from "react-native";
import commonStyles from "../../style/commonStyles"

export default StyleSheet.create({
    select_gender_title: {
     ...commonStyles.semiBoldText,
      marginVertical: 15,
    },
    gender_item_container: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  })
  
  