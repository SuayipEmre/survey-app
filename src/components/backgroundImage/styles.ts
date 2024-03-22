import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    image: {
        width: width,
        height: height,
        resizeMode: 'cover',
        zIndex: -2,
      },
})