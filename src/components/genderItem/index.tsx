import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { useThemeColor } from '../../store/features/theme/hooks'


type GenderItemPropsTypes = {
    gender: string
}
const GenderItem: React.FC<GenderItemPropsTypes> = ({ gender }) => {
    const color = useThemeColor()

    return (
        <View style={[{ backgroundColor: color.third }, styles.container]}>
            <Text style={styles.genre_text}>{gender}</Text>
        </View>
    )
}

export default GenderItem
