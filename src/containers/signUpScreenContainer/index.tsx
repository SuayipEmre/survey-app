import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthenticationFormInput from '../../components/authenticationFormInput'
import GenderItem from '../../components/genderItem'
import { useTranslation } from 'react-i18next'
import Button from '../../components/button'
import AccountActions from '../../components/authAccountActions'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AuthenticationNavigatorStackParamList } from '../../navigators/types'
import styles from './styles'

const SignUpScreenContainer = () => {
    const{t}  = useTranslation()

    const navigation = useNavigation<NavigationProp<AuthenticationNavigatorStackParamList>>()

  return (
    <>
          <View style={{ width: '70%' }}>
          <Text style={styles.select_gender_title}>{t('selectGender')}</Text>

          <View style={styles.gender_item_container}>
            <GenderItem gender={t('woman')} />
            <GenderItem gender={t('man')} />
          </View>

        </View>

        <AuthenticationFormInput labelText='E-Mail' />
        <AuthenticationFormInput labelText='Nickname' subText={t('privacyMessage')} />
        <AuthenticationFormInput labelText={t('password')} isSecure isIconWillShow />
        <AuthenticationFormInput labelText={t('birthday')} />

        <Button text={t('moveForward')} onPress={() => navigation.navigate('PDPLScreen')} />
        <AccountActions text={t('haveAccount')} buttonText={t('login')} onPress={() => navigation.goBack()} />
    </>
  )
}

export default SignUpScreenContainer
