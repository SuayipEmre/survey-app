import { StyleSheet } from "react-native";
import commonStyles from "../../../style/commonStyles"

export default StyleSheet.create({
    information_item_container: {
        height: 57,
        alignItems: 'center',
        marginHorizontal: 12,
        gap: 2,
      },
      info_value: {
        ...commonStyles.regularText,
        fontSize: 30,
        lineHeight: 33.45,
      },
      info_desc: {
        ...commonStyles.boldText,
        fontSize: 16,
        lineHeight: 17.84,
      },
})
