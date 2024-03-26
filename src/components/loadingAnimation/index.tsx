import { Text, View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import styles from './styles'
import { useThemeColor } from '../../store/features/theme/hooks'

const LoadingAnimation: React.FC = () => {
  const color = useThemeColor()
  return (
    <View style={[{backgroundColor:color.secondary}, styles.container]}>
      <AnimatedLottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'transparent',
        }}
        source={require('../../assets/animations/loading.json')}
      />

      <Text style={[{color : color.primary}, styles.text]}>Loading...</Text>
    </View>
  )
}

export default LoadingAnimation


