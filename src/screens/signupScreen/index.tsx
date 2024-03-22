

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/backgroundImage'
import AuthenticationScreensContainer from '../../containers/AuthScreensContainer'
import AuthenticationFormInput from '../../components/authenticationFormInput'
import Button from '../../components/button'
import AccountActions from '../../components/authAccountActions'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthenticationNavigatorStackParamList } from '../../navigators/types'

type SignUpScreenPropsTypes = NativeStackScreenProps<AuthenticationNavigatorStackParamList, 'SignupScreen'>

const SignUpScreen  : React.FC<SignUpScreenPropsTypes> = ({navigation}) => {
  return (
    <View>
      <BackgroundImage />
      <AuthenticationScreensContainer>

        <View style={{
          width: '70%',
        }}>
          <Text style={{
            marginVertical : 15,
          }}>Cinsiyetinizi Seçiniz</Text>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <View style={{
              backgroundColor: '#fff',
              width: '45%',
              paddingVertical: 14,
              paddingHorizontal: 10,
              alignItems: 'center',
              borderRadius: 8,

            }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '600'
                }}
              >Kadın</Text>
            </View>


            <View style={{
              backgroundColor: '#fff',
              width: '40%',
              paddingVertical: 14,
              paddingHorizontal: 10,
              alignItems: 'center',
              borderRadius: 8,
            }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '600'
                }}
              >Erkek</Text>
            </View>

          </View>



        </View>

        <AuthenticationFormInput labelText='E-Mail' />
        <AuthenticationFormInput labelText='Nickname' subText='Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden nickname oluşturunuz.' />
        <AuthenticationFormInput labelText='Şifre' isSecure isIconWillShow  />
        <AuthenticationFormInput labelText='Doğum Tarihi'  />

        <Button text='İLERLE'  />
        <AccountActions text='Hesabınız Var Mı ?' buttonText='Giriş Yap' onPress={() =>navigation.goBack()}  />
      </AuthenticationScreensContainer>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})


