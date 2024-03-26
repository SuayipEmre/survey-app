import { StyleSheet } from "react-native";
import commonStyles from "../../../style/commonStyles";

export default StyleSheet.create({
    container: {
      ...commonStyles.centerElementsInRow,
      gap: 20,
      alignSelf: 'center',
      marginBottom: 50,
  
    },
    prev_question_container: {
      width: 48,
      height: 40,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    next_question_button: {
  
      height: 40,
      width: 142,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 40,
    },
  })