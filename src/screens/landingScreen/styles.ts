import { Dimensions, StyleSheet } from "react-native"
import commonStyles from "../../style/commonStyles"

const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
  content: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height * 0.4,
    shadowColor: 'rgba(255, 255, 255, 0.5)',
    shadowOffset: { width: 0, height: -height * 0.15 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
    alignItems: 'center',
    paddingTop: 50,
  },

  hello_user_container: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 20,
  },

  hello_text: {
   ...commonStyles.boldText,
    fontSize: 18,
    lineHeight: 20.07,
  },
 
})