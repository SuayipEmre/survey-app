import { ActivityIndicator,  Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LikertQuestionHeader from '../../components/likertQuestionContent/likertQuestionHeader'
import SurveyQuestions from '../../components/surveyQuestions'
import { useTranslation } from 'react-i18next'
import { QuestionDataTypes } from '../../types/questionDataTypes'
import SurveyQuestionActions from '../../components/likertQuestionContent/actionButtons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { setCompleteQuestion, setCurrentStep, setQuestions, setRemainingTime, setSurveyName } from '../../store/features/survey/actions'
import { useCurrentStep, useQuestions, useRemainingTime } from '../../store/features/survey/hooks'
import CompletedSurveyContent from '../../components/completedSurveyContent'
import { formatTime } from '../../utils/date/formatTime'
import { useThemeColor } from '../../store/features/theme/hooks'

type LikertQuestionScreenPropsTypes = NativeStackScreenProps<MainNavigatorStackParamList, 'LikertQuestionScreen'>

const LikertQuestionScreen: React.FC<LikertQuestionScreenPropsTypes> = ({ route }) => {
  const [isQuestionsLoading, setIsQuestionsLoading] = useState(false)
  const [isQuestionsError, setIsQuestionsError] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const { t } = useTranslation(['translation', 'survey'])
  const remainingTime: number = useRemainingTime()
  const questions = useQuestions()
  const step = useCurrentStep()
  const color = useThemeColor()

  console.log(route.params.surveyCategory);
  
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


  //if there is no loading or error, return the content; otherwise, return loading or error.
  const renderContent = () => {
    if (isQuestionsLoading) return <ActivityIndicator />
    else if (isQuestionsError) return <Text>HATA !</Text>


    return <>
      <LikertQuestionHeader remainingTime={formatTime(remainingTime)} />
      {
        step == 9 ? <CompletedSurveyContent /> : (
          <>
            <SurveyQuestions selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />

            <SurveyQuestionActions onPress={handleNextQuestion} buttonText={t('nextQuestion')} />
          </>
        )
      }
    </>
  }



  return (
    <View style={{ flex: 1, backgroundColor:color.third }}>
      {renderContent()}
    </View>
  )
}

export default LikertQuestionScreen
