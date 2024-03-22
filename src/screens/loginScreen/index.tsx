import React, { useEffect, useState } from 'react';
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
import { UserSessionType } from '../../types/userSessionType';


type LoginScreenPropsTypes = NativeStackScreenProps<AuthenticationNavigatorStackParamList, 'LoginScreen'>

const LoginScreen: React.FC<LoginScreenPropsTypes> = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [sendLoginRequest, { isError, isLoading, data }] = useSendLoginRequestMutation()

  const handleLoginRequest = async () => {
    const credentials  = {
      username: username,
      password: password
    }

    console.log('posting...');

    try {
      await sendLoginRequest(credentials)
      await saveUserSessionToStorage(credentials)
      setUserSession(credentials)
      console.log('trying')


    } catch (e) {
      console.log('error', e)

    }
  }
  console.log(data);








  return (
    <>
      <BackgroundImage />

      <AuthScreensContentContainer>
        <AuthenticationFormInput
          labelText='Nickname'
          subText='Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden nickname oluşturunuz.'
          value={username}
          onChangeText={setUsername}
        />

        <AuthenticationFormInput
          labelText='Şifre'
          subText='Şifremi Unuttum'
          isSecure
          isIconWillShow
          value={password}
          onChangeText={setPassword}
        />

        <Button text='Giriş Yap' onPress={handleLoginRequest} />

        <AccountActions text='Üye değil misiniz ? ' buttonText='Hesap Oluştur' onPress={() => navigation.navigate('SignupScreen')} />
      </AuthScreensContentContainer>
    </>
  )
}

export default LoginScreen;


