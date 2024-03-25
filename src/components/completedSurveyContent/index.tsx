import { Text, View } from 'react-native'
import React from 'react'
import CompletedSurveyIcon from '../../icons/completedSurveyIcon'
import styles from './styles'
import SurveyQuestionActions from '../likertQuestionContent/actionButtons'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { useTranslation } from 'react-i18next'

const CompletedSurveyContent = () => {
    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()
    const { t } = useTranslation()

    return (
        <View style={styles.survey_completed_container}>
            <View style={styles.top_content}>
                <CompletedSurveyIcon />
                <Text style={styles.completed_text}>{t('surveyCompleted')}</Text>
                <Text>{t('creatingData')}</Text>
            </View>

            <SurveyQuestionActions onPress={() => navigation.navigate('LandingScreen')} buttonText={t('finish')} />
        </View>
    )
}

export default CompletedSurveyContent
