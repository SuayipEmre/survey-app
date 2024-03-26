import React, { useEffect, useState } from 'react';
import AuthenticationFormInput from '../../components/authenticationFormInput';
import Button from '../../components/button';
import AccountActions from '../../components/authAccountActions';
import BackgroundImage from '../../components/backgroundImage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthenticationNavigatorStackParamList } from '../../navigators/types';
import { useSendLoginRequestMutation } from '../../Services/LoginService';
import { saveUserSessionToStorage } from '../../utils/asyncStorage/userSession/saveUserSessionToStorage';
import { setUserSession } from '../../store/features/auth/actions';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Alert, StyleSheet, Text, View, useColorScheme } from 'react-native';
import AuthScreensLayout from '../../layouts/authScreensLayout';
import { Colors } from '../../style/colors';
import commonStyles from '../../style/commonStyles'
import { AuthScreens } from '../../types/authScreensEnum';
import LoadingAnimation from '../../components/loadingAnimation';

type LoginScreenPropsTypes = NativeStackScreenProps<AuthenticationNavigatorStackParamList, 'LoginScreen'>

const LoginScreen: React.FC<LoginScreenPropsTypes> = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { t } = useTranslation()
  const theme = useColorScheme()
  const color = Colors[theme!]


 

  const [sendLoginRequest, { isError, isLoading }] = useSendLoginRequestMutation()

  const handleLoginRequest = async () => {
    const credentials = {
      username: username,
      password: password
    }

    console.log('worked');
    
    try {
      const response = await sendLoginRequest(credentials)
      console.log(response);

      //If there is no error and data exists, save the user to AsyncStorage
      if (!response.error && response.data) {
        await saveUserSessionToStorage(credentials)
        setUserSession(credentials)
        
        return
      }


    } catch (e) {
      console.log('error', e)

    }
  }


  if (isLoading) return <LoadingAnimation />


  return (
    <>
      <BackgroundImage />

      <AuthScreensLayout activeScreen={AuthScreens.login}>
        <>
          <Text style={[{ color: color.primary }, styles.title]}>{t('welcome')}</Text>

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
        </>
        {
          isError && <>
            <View style={{
              alignItems:'center',
              gap : 6,
              backgroundColor:'red',
              paddingVertical : 6,
              paddingHorizontal : 4,
              borderRadius : 7,
            }}>
              <Text style={{
                color :'#fff'
              }}>{t('loginFailed')}</Text>
              <Text style={{
                color :'#fff'
              }}>{t('checkEmailAndPassword')}</Text>
            </View>
          </>
        }
      </AuthScreensLayout>
    </>
  )
}

export default LoginScreen;



const styles = StyleSheet.create({
  title: {
    ...commonStyles.boldText,
    lineHeight: 22.3,
    fontSize: 20,
  }
})