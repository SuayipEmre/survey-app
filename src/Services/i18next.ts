import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en/en.json'
import en_quiz from '../locales/en/en_quiz.json'
import tr from '../locales/tr/tr.json'
import tr_quiz from '../locales/tr/tr_quiz.json'

const languageResources = {
    en: {
        translation: en,
        quiz: en_quiz,
        
    },
    tr: {
        translation: tr,
        quiz: tr_quiz
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