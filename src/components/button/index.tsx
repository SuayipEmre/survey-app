import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


type ButtonPropsType = {
    text: string
}
const Button: React.FC<ButtonPropsType> = ({text}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: '40%',
        backgroundColor: '#0300A3',
        padding: 12,
        alignItems: 'center',
        borderRadius: 20,
    },
    button_text: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
})