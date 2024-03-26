import { Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles'

const LoginErrorInformation = () => {
    const {t} = useTranslation()

    return (
        <View style={styles.error_information_container}>
            <Text style={styles.text}>{t('loginFailed')}</Text>
            <Text style={styles.text}>{t('checkEmailAndPassword')}</Text>
        </View>
    )
}

export default LoginErrorInformation

