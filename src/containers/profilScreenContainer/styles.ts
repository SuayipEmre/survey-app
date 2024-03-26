import { Dimensions, StyleSheet } from "react-native"
import commonStyles from "../../style/commonStyles"

const { width } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    gap: 10,
    marginVertical : 30,

  },
  header: {
    flexDirection: 'row',
    gap: 8,
  },
  profile_text: {
    lineHeight: 15.61,
    ...commonStyles.boldText,
  },
  body_content: {
    ...commonStyles.centerElementsInRow,
    justifyContent: 'space-between',
    height: 61,
    paddingHorizontal: 7,
    borderRadius: 5,

  },
  body_content_item: {
  },
  section_title: {
   ...commonStyles.regularText,
    fontSize: 12,
    lineHeight: 13.38,
    color: '#B9B9B9',
  },
})