import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { useThemeColor } from '../../store/features/theme/hooks'

type ButtonPropsType = {
    text: string
    onPress: () => Promise<void> | void
}
const Button: React.FC<ButtonPropsType> = ({ text, onPress }) => {
    const color = useThemeColor()
    return (
        <TouchableOpacity style={[{backgroundColor : color.midblue}, styles.button]} onPress={onPress}>
            <Text style={styles.button_text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
