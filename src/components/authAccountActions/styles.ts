import { StyleSheet } from "react-native";
import commonStyles from "../../style/commonStyles";

const base_style = StyleSheet.create({

    text: {
        fontSize: 12,
        ...commonStyles.boldText,
        lineHeight: 13.38,
    },

})

export default StyleSheet.create({

    container: {
      ...commonStyles.centerElementsInRow,
    },
    account_actions_info_text: {
    ...base_style.text,
    },
    account_actions_action_text: {
        ...base_style.text,
    },
})
