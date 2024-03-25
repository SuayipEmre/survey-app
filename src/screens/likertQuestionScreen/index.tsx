import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import LikertQuestionHeader from '../../components/likertQuestionContent/likertQuestionHeader'
import SurveyQuestions from '../../components/surveyQuestions'
import { useTranslation } from 'react-i18next'
import { QuestionDataTypes } from '../../types/questionDataTypes'
import SurveyQuestionActions from '../../components/likertQuestionContent/actionButtons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { setCompleteQuestion, setCurrentStep, setQuestions, setRemainingTime } from '../../store/survey/actions'
import { useCurrentStep, useQuestions, useRemainingTime } from '../../store/survey/hooks'
import CompletedSurveyIcon from '../../icons/completedSurveyIcon'
import CompletedSurveyContent from '../../components/completedSurveyContent'

type LikertQuestionScreenPropsTypes = NativeStackScreenProps<MainNavigatorStackParamList, 'LikertQuestionScreen'>

const LikertQuestionScreen: React.FC<LikertQuestionScreenPropsTypes> = ({ route }) => {
  const [isQuestionsLoading, setIsQuestionsLoading] = useState(false)
  const [isQuestionsError, setIsQuestionsError] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const { t } = useTranslation(['translation', 'survey'])
  const remainingTime: number = useRemainingTime()
  const questions = useQuestions()
  const step = useCurrentStep()



  useEffect(() => {
    setIsQuestionsLoading(true)

    const getAndSetQuestions = async () => {
      try {
        const questions: QuestionDataTypes[] = await t(route.params.surveyCategory, { ns: 'survey', returnObjects: true });
        setQuestions(questions);
        setIsQuestionsLoading(false)
      } catch (error) {
        setIsQuestionsLoading(false)
        setIsQuestionsError(true)
      }
    };

    getAndSetQuestions()
  }, [])

  useEffect(() => {

    let interval: NodeJS.Timeout

    if (remainingTime > 0) {
      // start timer
      interval = setInterval(() => {
        setRemainingTime(remainingTime - 1)
      }, 1000)
    }

    //clear timer
    return () => clearInterval(interval)
  }, [remainingTime])


  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60;
    return `00:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }



  const handleNextQuestion = () => {
    if (step < 9) {
      //before change the question, add current question to completed questions.
      setCompleteQuestion({
        isAdd: true,
        question: {
          ...questions[step],
          questionResponseTimeInSeconds: 1800 - remainingTime
        }
      })
      setCurrentStep(step + 1)

      setSelectedAnswer('')
    } else if (step == 9) {
      //complete survey
      setCompleteQuestion({ isCompletedSurvey: true })
    }
  }


  //if there are no loading and arror return content, otherwise return loading or error
  const renderContent = () => {
    if (isQuestionsLoading) return <ActivityIndicator />
    else if (isQuestionsError) return <Text>HATA !</Text>
    
    
    return <>
      <LikertQuestionHeader remainingTime={formatTime(remainingTime)} />
      {
        step == 9 ?<CompletedSurveyContent /> : (
          <>
            <SurveyQuestions selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />

            <SurveyQuestionActions onPress={handleNextQuestion} buttonText={t('nextQuestion')}/>
          </>
        )
      }
    </>
  }



  return (
    <View style={{ flex: 1 }}>
      {renderContent()}
    </View>
  )
}

export default LikertQuestionScreen
