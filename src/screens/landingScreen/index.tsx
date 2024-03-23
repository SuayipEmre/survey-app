import { Dimensions, SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/backgroundImage'
import { useUserSession } from '../../store/features/auth/hooks'
import { useTranslation } from 'react-i18next'
import { Colors } from '../../style/colors'
import Button from '../../components/button'

const LandingScreen = () => {
  const user = useUserSession()
  const { t } = useTranslation()
  const theme = useColorScheme()
  const color = Colors[theme!]




  return (
    <>
      <BackgroundImage />
      <View style={styles.content}>
       <View style={{
        flexDirection :'row',
        gap:5,
        marginBottom:20,
       }}>
        <Text style={styles.hello_text}>{t('hello')}</Text>
        <Text style={[styles.hello_text, styles.username_text]}>{user?.username}</Text>
       </View>

       <Button onPress={() => {}} text={t('startSurvey')} />
       
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
    backgroundColor: '#fff',
    shadowColor: 'rgba(255, 255, 255, 0.5)', 
    shadowOffset: { width: 0, height: -height * 0.15 },
    shadowOpacity: 1, 
    shadowRadius: 10, 
    elevation: 2, 
    gap :10,
    alignItems :'center',
    paddingTop : 80,
  },

  hello_text : {
    fontFamily: 'Comfortaa-Bold',
    color :'#000',
    fontWeight :'700',
    fontSize : 18,
    lineHeight: 20.07,
  },
  username_text : {
    color :'#0300A3',
  }
})