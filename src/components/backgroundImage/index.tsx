import React from 'react'
import { Image } from 'react-native'
import styles from './styles'

const BackgroundImage = () => {
  return (
    <Image
      source={require('../../assets/app-background.png')}
      style={styles.image}
    />

  )
}

export default BackgroundImage
