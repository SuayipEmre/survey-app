import React from 'react'
import {  Text, TouchableOpacity } from 'react-native'
import styles from './styles'

type AccountActionsPropsType = {
    text: string,
    onPress: () => void
    buttonText: string
}

const AccountActions: React.FC<AccountActionsPropsType> = ({ text, onPress, buttonText }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.account_actions_info_text}>{text} </Text>
            <Text style={styles.account_actions_action_text}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default AccountActions


