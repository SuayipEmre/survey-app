import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import styles from './styles'

const BackgroundImage = () => {
  return (
    <Image
        source={require('../../assets/auth-bg.png')}
        style={styles.image}
      />

  )
}

export default BackgroundImage
