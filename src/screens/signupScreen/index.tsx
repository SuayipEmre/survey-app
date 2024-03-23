

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/backgroundImage'
import AuthenticationFormInput from '../../components/authenticationFormInput'
import Button from '../../components/button'
import AccountActions from '../../components/authAccountActions'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthenticationNavigatorStackParamList } from '../../navigators/types'
import GenderItem from '../../components/genderItem'
import AuthScreensContentContainer from '../../containers/AuthScreensContainer'
import { useTranslation } from 'react-i18next'

type SignUpScreenPropsTypes = NativeStackScreenProps<AuthenticationNavigatorStackParamList, 'SignupScreen'>

const SignUpScreen  : React.FC<SignUpScreenPropsTypes> = ({navigation}) => {
  const{t}  = useTranslation()

  return (
    <View>
      <BackgroundImage />
      <AuthScreensContentContainer>

        <View style={{width: '70%'}}>
          <Text style={styles.select_gender_title}>{t('selectGender')}</Text>

          <View style={styles.gender_item_container}>
           <GenderItem  gender={t('woman')}/>
           <GenderItem  gender={t('man')}/>
          </View>

        </View>

        <AuthenticationFormInput labelText='E-Mail' />
        <AuthenticationFormInput labelText='Nickname' subText={t('privacyMessage')} />
        <AuthenticationFormInput labelText={t('password')} isSecure isIconWillShow  />
        <AuthenticationFormInput labelText={t('birthday')}  />

        <Button text={t('moveForward')}  onPress={() => navigation.navigate('PDPLScreen')} />
        <AccountActions text={t('haveAccount')} buttonText={t('login')} onPress={() =>navigation.goBack()}  />
      </AuthScreensContentContainer>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  select_gender_title : {
    fontFamily :'Comfortaa-SemiBold',
    marginVertical : 15,
  },
  gender_item_container:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})


