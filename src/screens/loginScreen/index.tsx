import React from 'react';
import AuthenticationFormInput from '../../components/authenticationFormInput';
import Button from '../../components/button';
import AccountActions from '../../components/authAccountActions';
import BackgroundImage from '../../components/backgroundImage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthenticationNavigatorStackParamList } from '../../navigators/types';
import AuthScreensContentContainer from '../../containers/AuthScreensContainer';



type LoginScreenPropsTypes = NativeStackScreenProps<AuthenticationNavigatorStackParamList, 'LoginScreen'>

const LoginScreen: React.FC<LoginScreenPropsTypes> = ({ navigation }) => {



  return (
    <>
      <BackgroundImage />

      <AuthScreensContentContainer>
        <AuthenticationFormInput labelText='Nickname' subText='Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden nickname oluşturunuz.' />
        <AuthenticationFormInput labelText='Şifre' subText='Şifremi Unuttum' isSecure  isIconWillShow/>

        <Button text='Giriş Yap' onPress={() => {}} />

        <AccountActions text='Üye değil misiniz ? ' buttonText='Hesap Oluştur' onPress={() => navigation.navigate('SignupScreen')} />
      </AuthScreensContentContainer>
    </>
  )
}

export default LoginScreen;


