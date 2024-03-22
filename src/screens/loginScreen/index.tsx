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
import AccountActions from '../../components/authenticationAccountActions';
import BackgroundImage from '../../components/backgroundImage';


const LoginScreen = () => {
  const theme = useColorScheme();

  const color = Colors[theme!];

  return (
    <>
      <BackgroundImage />
      <View style={styles.content}>
        <AuthenticationFormInput labelText='Nickname' subText='Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden nickname oluşturunuz.' />
        <AuthenticationFormInput labelText='Şifre' subText='Şifremi Unuttum' isSecure />

        <Button text='Giriş Yap' />

        <AccountActions text='Üye değil misiniz ? ' buttonText='Hesap Oluştur' onPress={() => { }} />
      </View>
    </>
  );
};

export default LoginScreen;

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
    zIndex: -2,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },

})
