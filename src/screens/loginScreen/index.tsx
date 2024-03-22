import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AuthenticationFormInput from '../../components/authenticationFormInput';
import Button from '../../components/button';
import AccountActions from '../../components/authAccountActions';
import BackgroundImage from '../../components/backgroundImage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthenticationNavigatorStackParamList } from '../../navigators/types';
import AuthenticationScreensContainer from '../../containers/AuthScreensContainer';



type LoginScreenPropsTypes = NativeStackScreenProps<AuthenticationNavigatorStackParamList, 'LoginScreen'>

const LoginScreen: React.FC<LoginScreenPropsTypes> = ({ navigation }) => {

  const theme = useColorScheme()

  const color = Colors[theme!]

  return (
    <>
      <BackgroundImage />

      <AuthenticationScreensContainer>
        <AuthenticationFormInput labelText='Nickname' subText='Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden nickname oluşturunuz.' />
        <AuthenticationFormInput labelText='Şifre' subText='Şifremi Unuttum' isSecure  isIconWillShow/>

        <Button text='Giriş Yap' />

        <AccountActions text='Üye değil misiniz ? ' buttonText='Hesap Oluştur' onPress={() => navigation.navigate('SignupScreen')} />
      </AuthenticationScreensContainer>
    </>
  )
}

export default LoginScreen;

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
    zIndex: -2,
  },


})
