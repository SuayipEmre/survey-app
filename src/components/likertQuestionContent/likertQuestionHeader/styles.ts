import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    height: height * 0.22,
    borderBottomRightRadius: width * 0.12,
    borderBottomLeftRadius: width * 0.12,
    paddingTop: height * 0.04
  },
  icon_container: {
    width: 38,
    height: 38,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 19,
  },
  top_content:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  remaining_time_text:{
    position: 'absolute',
    top: 44,
    left: '20%',
    fontFamily: 'Comfortaa-Regular',
    fontWeight: '400',
    lineHeight: 15.61,
    color: '#fff',
  },
  bottom_content:{
    width: '90%',
    alignSelf: 'center',
    gap: 12
  },
  survey_topic_title:{
    fontFamily: 'Comfortaa-Bold',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 15.61,
    color: '#fff'
  },


})