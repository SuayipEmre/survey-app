import { Dimensions, StyleSheet } from "react-native"
import commonStyles from "../../style/commonStyles"

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width * 0.9,
    alignItems: 'center',
  },
  title: {
    ...commonStyles.boldText,
    fontSize: 16,
    lineHeight: 17.84,
    marginVertical: 40,
  },

  content_title_container: {
    width: '90%',
    alignSelf: 'center',
    ...commonStyles.centerElementsInRow,
    gap: 6,
    marginTop: 12,

  },
  list_text: {
    ...commonStyles.boldText,
    fontSize: 12,
    lineHeight: 13.38
  },


})


