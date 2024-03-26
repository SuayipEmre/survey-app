import { Text, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/backgroundImage'
import { useUserSession } from '../../store/features/auth/hooks'
import { useTranslation } from 'react-i18next'
import Button from '../../components/button'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { useThemeColor } from '../../store/features/theme/hooks'
import styles from './styles'


const LandingScreen = () => {
  const user = useUserSession()
  const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()
  const { t } = useTranslation()
  const color = useThemeColor()
  
    
  return (
    <>
      <BackgroundImage />

      <View style={[{backgroundColor:color.third}, styles.content]}>

        <View style={styles.hello_user_container}>
          <Text style={[{color:  color.primary}, styles.hello_text]}>{t('hello')}</Text>
          <Text style={[{color : color.midblue}, styles.hello_text,]}>{user?.username}</Text>
        </View>

        <Button onPress={() => navigation.navigate('SurveyCategoryScreen')} text={t('startSurvey')} />

      </View>
    </>
  )
}

export default LandingScreen

