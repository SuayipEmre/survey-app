import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en/en.json'
import en_survey from '../locales/en/en_survey.json'
import tr from '../locales/tr/tr.json'
import tr_survey from '../locales/tr/tr_survey.json'

const languageResources = {
    en: {
        translation: en,
        survey: en_survey,
        
    },
    tr: {
        translation: tr,
        survey: tr_survey
    }
}
i18next
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        fallbackLng: 'en',
        lng: 'tr',
        resources: languageResources
    })


export default i18next