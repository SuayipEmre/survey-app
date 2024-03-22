

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

type SignUpScreenPropsTypes = NativeStackScreenProps<AuthenticationNavigatorStackParamList, 'SignupScreen'>

const SignUpScreen  : React.FC<SignUpScreenPropsTypes> = ({navigation}) => {
  return (
    <View>
      <BackgroundImage />
      <AuthScreensContentContainer>

        <View style={{width: '70%'}}>
          <Text style={styles.select_gender_title}>Cinsiyetinizi Seçiniz</Text>

          <View style={styles.gender_item_container}>
           <GenderItem  gender='Kadın'/>
           <GenderItem  gender='Erkek'/>
          </View>

        </View>

        <AuthenticationFormInput labelText='E-Mail' />
        <AuthenticationFormInput labelText='Nickname' subText='Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden nickname oluşturunuz.' />
        <AuthenticationFormInput labelText='Şifre' isSecure isIconWillShow  />
        <AuthenticationFormInput labelText='Doğum Tarihi'  />

        <Button text='İLERLE'  onPress={() => navigation.navigate('PDPLScreen')} />
        <AccountActions text='Hesabınız Var Mı ?' buttonText='Giriş Yap' onPress={() =>navigation.goBack()}  />
      </AuthScreensContentContainer>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  select_gender_title : {
    marginVertical : 15,
  },
  gender_item_container:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})


