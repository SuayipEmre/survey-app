import React, {  useState } from 'react';
import BackgroundImage from '../../components/backgroundImage';
import { useSendLoginRequestMutation } from '../../Services/LoginService';
import { saveUserSessionToStorage } from '../../utils/asyncStorage/userSession/saveUserSessionToStorage';
import { setUserSession } from '../../store/features/auth/actions';
import AuthScreensLayout from '../../layouts/authScreensLayout';
import { AuthScreens } from '../../types/authScreensEnum';
import LoadingAnimation from '../../components/loadingAnimation';
import LoginScreenContainer from '../../containers/loginScreencontainer';
import LoginErrorInformation from '../../components/loginErrorInformation';


const LoginScreen: React.FC= ( ) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
 

  const [sendLoginRequest, { isError, isLoading }] = useSendLoginRequestMutation()

  const handleLoginRequest = async () => {
    const credentials = {
      username: username,
      password: password
    }

    
    try {
      const response = await sendLoginRequest(credentials)

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
      
      <LoginScreenContainer
       handleLoginRequest={handleLoginRequest}
       password={password}
       setPassword={setPassword}
       setUsername={setUsername}
       username={username}
        />
        {
          isError && <LoginErrorInformation />
        }
      </AuthScreensLayout>
    </>
  )
}

export default LoginScreen;



