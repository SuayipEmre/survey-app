import { View } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/backgroundImage'
import AuthScreensLayout from '../../layouts/authScreensLayout'
import { AuthScreens } from '../../types/authScreensEnum'
import SignUpScreenContainer from '../../containers/signUpScreenContainer'

const SignUpScreen: React.FC = () => {

  return (
    <View>
      <BackgroundImage />
      <AuthScreensLayout activeScreen={AuthScreens.signup}>
        <SignUpScreenContainer />
      </AuthScreensLayout>
    </View>
  )
}

export default SignUpScreen

