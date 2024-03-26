import { Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ProfileSectionItem from '../../components/profileSectionItem'
import { useUserSession } from '../../store/features/auth/hooks'
import { ProfileIcon } from '../../icons/userIcon'
import styles from './styles'
import i18n from '../../i18n/i18n'
import { saveUserLanguagePreference } from '../../utils/asyncStorage/language/saveLanguagePreferenceToStorage'
import { useLanguage } from '../../store/features/language/hooks'
import { removeUserSession } from '../../utils/asyncStorage/userSession/removeUserSessionFromStorage'
import { setLanguage } from '../../store/features/language/actions'
import { Language } from '../../types/language'
import { useThemeColor } from '../../store/features/theme/hooks'

const ProfileScreenContainer = () => {
    const { t } = useTranslation()
    const userSession = useUserSession()
    const language = useLanguage()
    const color = useThemeColor()





    const handleSetLanguage = async () => {

        //active language is english => new language will be turkish
        //active language is turkish => new language will be english
        setLanguage(language == Language.en ? Language.tr : Language.en)
        await i18n.changeLanguage(language)

        //save user language preference to async storage
        await saveUserLanguagePreference(language)
    }

    //user session will be deleted from async storage
    const handleLogout = async () => {
        await removeUserSession()
    }

    return (

        <View style={[{backgroundColor : color.third}, styles.container]}>

            <View style={styles.header}>
                <ProfileIcon color={color.midblue} size={15} />
                <Text style={[{color:  color.midblue}, styles.profile_text]}>{t('profile')}</Text>
            </View>


            <Text style={[{color : color.secondary}, styles.section_title]}>{t('accountInfo')}</Text>


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
