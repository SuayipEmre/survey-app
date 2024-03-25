import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CompletedSurveyIcon from '../../icons/completedSurveyIcon'
import styles from './styles'
import SurveyQuestionActions from '../likertQuestionContent/actionButtons'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { useTranslation } from 'react-i18next'
import { useThemeColor } from '../../store/features/theme/hooks'
import { useCompletedQuestions, useSurveyName } from '../../store/features/survey/hooks'
import { clearAllQuestionData, questionOperations, setCompletedSurveys } from '../../store/features/survey/actions'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CompletedSurveyContent = () => {

    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()
    const { t } = useTranslation()
    const color = useThemeColor()
    const surveyName = useSurveyName()
    const completedQuestion = useCompletedQuestions()


    useEffect(() => {
        questionOperations({ isFinished: true })

        return () => {
            //clear all data of  previous survey
            clearAllQuestionData()
            removeUnfinishedSurveyFromStorage()
        }
    }, [])





    const removeUnfinishedSurveyFromStorage = async () => {

        try {
            try {
                await AsyncStorage.removeItem(`unfinished/${surveyName}`);
                console.log('Unfinished survey successfully removed from AsyncStorage.');
            } catch (error) {
                console.log("AsyncStorage'den veri silinirken bir hata oluştu: ", error);
            }
        } catch (error) {

        }
    }





    const handleFinishSurvey = () => {
        setCompletedSurveys({ surveyName, survey: completedQuestion })
        navigation.navigate('LandingScreen')
    }



    return (
        <View style={styles.survey_completed_container}>
            <View style={styles.top_content}>
                <CompletedSurveyIcon />
                <Text style={styles.completed_text}>{t('surveyCompleted')}</Text>
                <Text style={{ color: color.primary }}>{t('creatingData')}</Text>
            </View>

            <SurveyQuestionActions onPress={handleFinishSurvey} buttonText={t('finish')} />
        </View>
    )
}

export default CompletedSurveyContent
