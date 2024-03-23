import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import i18n from '../../Services/i18next'
import { useTranslation } from 'react-i18next'
import { ProfileIcon } from '../../icons/userIcon'
import { Colors } from '../../style/colors'
import ProfileSectionItem from '../../components/profileSectionItem'
import { useUserSession } from '../../store/features/auth/hooks'

const ProfileScreen = () => {
  const [lang, setLang] = useState('en')
  const { t } = useTranslation()
  const theme = useColorScheme()
  const color = Colors[theme!]

  const userSession = useUserSession()

  const setLanguage = async () => {
    setLang(prev => prev == 'en' ? 'tr' : 'en')
    await i18n.changeLanguage(lang)
  }

  return (
    <SafeAreaView style={{
    }}>
      <ScrollView contentContainerStyle={{
        alignItems:'center'
      }}>
        <View style={styles.container}>

          <View style={styles.header}>
            <ProfileIcon color='#0300a3' size={15} />
            <Text style={styles.profile_text}>{t('profile')}</Text>
          </View>


          <Text style={styles.section_title}>{t('accountInfo')}</Text>


          <ProfileSectionItem title='Nickname' subText='Text' />
          <ProfileSectionItem title='E-mail' subText={userSession?.username} />
          <ProfileSectionItem title={t('birthday')} subText='01.01.1111' />
          <ProfileSectionItem title={t('gender')} subText='Lorem ipsum' />



          <Text style={styles.section_title}>{t('app')}</Text>

          <ProfileSectionItem title={t('changeLanguage')} ischangeLanguageSection setLanguage={setLanguage} />


          <Text style={styles.section_title}>{t('aboutUs')}</Text>


          <ProfileSectionItem title={t('privacyPolicy')} isAboutUsSection />
          <ProfileSectionItem title={t('termsAndConditions')} isAboutUsSection />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    gap: 20,
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    gap: 8,
  },
  profile_text: {
    color: '#0300A3',
    lineHeight: 15.61,
    fontWeight: '700'
  },
  body_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 61,
    paddingHorizontal: 7,
    borderRadius: 5,

  },
  body_content_item: {
  },
  section_title: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 13.38,
    color: '#B9B9B9',
  },
})