import React, { useState } from 'react';
import AuthenticationFormInput from '../../components/authenticationFormInput';
import Button from '../../components/button';
import AccountActions from '../../components/authAccountActions';
import BackgroundImage from '../../components/backgroundImage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthenticationNavigatorStackParamList } from '../../navigators/types';
import AuthScreensContentContainer from '../../containers/AuthScreensContainer';
import { useSendLoginRequestMutation } from '../../Services/LoginService';
import { saveUserSessionToStorage } from '../../utils/saveUserSessionToStorage';
import { setUserSession } from '../../store/features/auth/actions';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


type LoginScreenPropsTypes = NativeStackScreenProps<AuthenticationNavigatorStackParamList, 'LoginScreen'>

const LoginScreen: React.FC<LoginScreenPropsTypes> = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { t } = useTranslation()
  const theme = useColorScheme()
  const color = Colors[theme!]


  const [sendLoginRequest, { isError, isLoading, data }] = useSendLoginRequestMutation()

  const handleLoginRequest = async () => {
    const credentials  = {
      username: username,
      password: password
    }

    try {
      await sendLoginRequest(credentials)
      await saveUserSessionToStorage(credentials)
      setUserSession(credentials)

    } catch (e) {
      console.log('error', e)

    }
  }



  return (
    <>
      <BackgroundImage />


      <AuthScreensContentContainer>
      <Text style={[{color : color.primary}, styles.title]}>{t('welcome')}</Text>
        <AuthenticationFormInput
          labelText='Nickname'
          subText={t('privacyMessage')}
          value={username}
          onChangeText={setUsername}
        />

        <AuthenticationFormInput
          labelText={t('password')}
          subText={t('forgotPassword')}
          isSecure
          isIconWillShow
          value={password}
          onChangeText={setPassword}
        />

        <Button text={t('login')} onPress={handleLoginRequest} />

        <AccountActions text={t('notMember')} buttonText={t('createAccount')} onPress={() => navigation.navigate('SignupScreen')} />
      </AuthScreensContentContainer>
    </>
  )
}

export default LoginScreen;



const styles = StyleSheet.create({
  title : {
    fontFamily :'Comfortaa-Bold',
    fontWeight :'700',
    lineHeight : 22.3,
    fontSize :20,
  }
})