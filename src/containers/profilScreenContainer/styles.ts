import { Dimensions, StyleSheet } from "react-native"

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
    fontFamily: 'Comfortaa-Bold',
    color: '#0300A3',
    lineHeight: 15.61,
    fontWeight: '700'
  },
  body_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 61,
    paddingHorizontal: 7,
    borderRadius: 5,

  },
  body_content_item: {
  },
  section_title: {
    fontFamily: 'Comfortaa-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 13.38,
    color: '#B9B9B9',
  },
})