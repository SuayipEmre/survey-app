import { ActivityIndicator, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LikertQuestionHeader from '../../components/likertQuestionContent/likertQuestionHeader'
import SurveyQuestions from '../../components/surveyQuestions'
import { useTranslation } from 'react-i18next'
import { QuestionDataTypes } from '../../types/questionDataTypes'
import SurveyQuestionActions from '../../components/likertQuestionContent/actionButtons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { questionOperations, setCurrentStep, setQuestions, setRemainingTime, setSelectedAnswer, setSurveyName } from '../../store/features/survey/actions'
import { useCurrentStep, useQuestions, useRemainingTime, useSelectedAnswer } from '../../store/features/survey/hooks'
import CompletedSurveyContent from '../../components/completedSurveyContent'
import { useThemeColor } from '../../store/features/theme/hooks'
import { getIsUnfinishedSurvey } from '../../utils/asyncStorage/survey/getIsUnfisinshedSurvey'
import { saveunfinishedSurveyToStorage } from '../../utils/asyncStorage/survey/saveUnfinishedSurveyToStorage'


type LikertQuestionScreenPropsTypes = NativeStackScreenProps<MainNavigatorStackParamList, 'LikertQuestionScreen'>

const LikertQuestionScreen: React.FC<LikertQuestionScreenPropsTypes> = ({ route }) => {
  const [isQuestionsLoading, setIsQuestionsLoading] = useState(false)
  const [isQuestionsError, setIsQuestionsError] = useState(false)
  const { t } = useTranslation(['translation', 'survey'])
  const remainingTime: number = useRemainingTime()
  const questions = useQuestions()
  const step = useCurrentStep()
  const color = useThemeColor()
  const selectedAnswer = useSelectedAnswer()

  useEffect(() => {
    setIsQuestionsLoading(true)
    setSurveyName(route.params.surveyCategory)


    const getAndSetQuestions = async () => {
      //get question by category and language from i18next.
      try {
        const questions: QuestionDataTypes[] = await t(route.params.surveyCategory, { ns: 'survey', returnObjects: true });
        setQuestions(questions)
        setIsQuestionsLoading(false)
      } catch (error) {
        setIsQuestionsLoading(false)
        setIsQuestionsError(true)
      }
    }

    getAndSetQuestions()

  }, [])

  const asyncGetUnfinishedSurvey = async () => {
    await getIsUnfinishedSurvey(route.params.surveyCategory)
  }

  /*
       If the step is between 0 and 9, it means that the user has not finished the survey.
        The survey is saved in the storage as an unfinished survey.
       */
  const asyncSetUnfinishedSurvey = async () => {
    await saveunfinishedSurveyToStorage(step, route.params.surveyCategory)
  }
  useEffect(() => {
    asyncGetUnfinishedSurvey()

    return () => {
      if (step > 0 && step < 9)  asyncSetUnfinishedSurvey()

    }

  }, [])



  const handleNextQuestion = () => {
    if (step < 9) {
      //before change the question, add current question to completed questions.
      questionOperations({
        isAdd: true,
        question: {
          ...questions[step],
          questionResponseTimeInSeconds: 1800 - remainingTime,
          selectedAnswer: selectedAnswer,
        }
      })
      setCurrentStep(step + 1)
      setSelectedAnswer('')
    }


  }




  //if there is no loading or error, return the content; otherwise, return loading or error.
  const renderContent = () => {
    if (isQuestionsLoading) return <ActivityIndicator />
    else if (isQuestionsError) return <Text>HATA !</Text>


    return <>
      <LikertQuestionHeader />
      {
        step == 9 ? <CompletedSurveyContent /> : (
          <>
            <SurveyQuestions />

            <SurveyQuestionActions onPress={handleNextQuestion} buttonText={t('nextQuestion')} />
          </>
        )
      }
    </>
  }



  return (
    <View style={{ flex: 1, backgroundColor: color.third }}>
      {renderContent()}
    </View>
  )
}

export default LikertQuestionScreen