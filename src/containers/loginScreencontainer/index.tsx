import { Text  } from 'react-native'
import React from 'react'
import AuthenticationFormInput from '../../components/authenticationFormInput'
import { useThemeColor } from '../../store/features/theme/hooks'
import Button from '../../components/button'
import { useTranslation } from 'react-i18next'
import AccountActions from '../../components/authAccountActions'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import {AuthenticationNavigatorStackParamList} from '../../navigators/types'
import styles from './styles'


type LoginScreenContainerPropsTypes = {
  username : string,
  setUsername :(username : string) => void,
  password : string,
  setPassword :(password : string) => void
  handleLoginRequest : () => Promise<void>
}
const LoginScreenContainer : React.FC<LoginScreenContainerPropsTypes> = ({
  handleLoginRequest,
  password,
  setPassword,
  setUsername,
  username
}) => {

  const color = useThemeColor()
  const{t}  = useTranslation()

  const navigation = useNavigation<NavigationProp<AuthenticationNavigatorStackParamList>>()
  return (
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
  )
}

export default LoginScreenContainer

