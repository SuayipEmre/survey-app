import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

type ButtonPropsType = {
    text: string
    onPress: () => Promise<void> | void
}
const Button: React.FC<ButtonPropsType> = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.button_text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
