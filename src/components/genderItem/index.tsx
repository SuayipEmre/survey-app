import { Text, View, useColorScheme } from 'react-native'
import React from 'react'
import styles from './styles'


type GenderItemPropsTypes = {
    gender: string
}
const GenderItem: React.FC<GenderItemPropsTypes> = ({ gender }) => {

    const theme = useColorScheme()

    const color = {
        light: {
            bg: '#fff'

        },
        dark: {
            bg: '#000'
        }
    }
    return (
        <View style={[{ backgroundColor: color[theme!].bg }, styles.container]}>
            <Text style={styles.genre_text}>{gender}</Text>
        </View>
    )
}

export default GenderItem
