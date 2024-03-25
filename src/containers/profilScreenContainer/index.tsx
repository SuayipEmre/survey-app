import { Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ProfileSectionItem from '../../components/profileSectionItem'
import { useUserSession } from '../../store/features/auth/hooks'
import { ProfileIcon } from '../../icons/userIcon'
import styles from './styles'
import i18n from '../../Services/i18next'
import { saveUserLanguagePreference } from '../../utils/asyncStorage/saveLanguagePreferenceToStorage'
import { useLanguage } from '../../store/features/language/hooks'
import { removeUserSession } from '../../utils/asyncStorage/removeUserSessionFromStorage'
import { setLanguage } from '../../store/features/language/actions'
import { Language } from '../../types/language'

const ProfileScreenContainer = () => {
    const { t } = useTranslation()
    const userSession = useUserSession()
    const language = useLanguage()






    const handleSetLanguage = async () => {

        //active language is english => new language will be turkish
        //active language is turkish => new language will be english
        setLanguage(language == Language.en ? Language.tr : Language.en)
        await i18n.changeLanguage(language)

        console.log('lan ');


        //save user language preference to async storage
        await saveUserLanguagePreference(language)
    }

    //user session will be deleted from async storage
    const handleLogout = async () => {
        await removeUserSession()
    }

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <ProfileIcon color='#0300a3' size={15} />
                <Text style={styles.profile_text}>{t('profile')}</Text>
            </View>


            <Text style={styles.section_title}>{t('accountInfo')}</Text>


            <ProfileSectionItem title='Nickname' subText='Text' />
            <ProfileSectionItem title='E-mail' subText={userSession?.username ?? "test@test.com"} />
            <ProfileSectionItem title={t('birthday')} subText='01.01.1111' />
            <ProfileSectionItem title={t('gender')} subText='Lorem ipsum' />



            <Text style={styles.section_title}>{t('app')}</Text>

            <ProfileSectionItem title={t('changeLanguage')} isAppSection onPress={handleSetLanguage} />
            <ProfileSectionItem title={t('logout')} isAppSection isLogOutButton onPress={handleLogout} />


            <Text style={styles.section_title}>{t('aboutUs')}</Text>


            <ProfileSectionItem title={t('privacyPolicy')} isAboutUsSection />
            <ProfileSectionItem title={t('termsAndConditions')} isAboutUsSection />

        </View>

    )
}

export default ProfileScreenContainer
