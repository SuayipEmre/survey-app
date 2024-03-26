import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/backgroundImage'
import { useUserSession } from '../../store/features/auth/hooks'
import { useTranslation } from 'react-i18next'
import Button from '../../components/button'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { useThemeColor } from '../../store/features/theme/hooks'
import commonStyles from '../../style/commonStyles'



const LandingScreen = () => {
  const user = useUserSession()
  const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()
  const { t } = useTranslation()
  const color = useThemeColor()
  
  const loading = true
    
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

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height * 0.4,
    shadowColor: 'rgba(255, 255, 255, 0.5)',
    shadowOffset: { width: 0, height: -height * 0.15 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
    alignItems: 'center',
    paddingTop: 50,
  },

  hello_user_container: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 20,
  },

  hello_text: {
   ...commonStyles.boldText,
    fontSize: 18,
    lineHeight: 20.07,
  },
 
})