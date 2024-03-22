import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import i18n from '../../Services/i18next'
import { useTranslation } from 'react-i18next'

const ProfileScreen = () => {
  const [lang, setLang] = useState('en')
  const { t } = useTranslation()
  
  const setLanguage = async (lng: string) => {
    setLang(prev => prev == 'en' ? 'tr' : 'en')
    console.log('changing');
    await i18n.changeLanguage(lang)
  }

  return (
    <View>
      <Text>{t('welcome')}</Text>
      <TouchableOpacity onPress={() => setLanguage('en')}>
      <Text>Change lang</Text>
      </TouchableOpacity>
      <Text>Aktif Dil : {i18n.language}</Text>
    </View>
  )
}

export default ProfileScreen
