import { ActivityIndicator, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import LikertQuestionHeader from '../../components/likertQuestionContent/likertQuestionHeader'
import SurveyQuestions from '../../components/surveyQuestions'
import { useTranslation } from 'react-i18next'
import { QuestionDataTypes } from '../../types/questionDataTypes'
import SurveyQuestionActions from '../../components/likertQuestionContent/actionButtons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { setQuestions, setRemainingTime } from '../../store/survey/actions'
import { Text } from 'react-native-svg'
import { useRemainingTime } from '../../store/survey/hooks'

type LikertQuestionScreenPropsTypes = NativeStackScreenProps<MainNavigatorStackParamList, 'LikertQuestionScreen'>

const LikertQuestionScreen: React.FC<LikertQuestionScreenPropsTypes> = ({ route }) => {
  console.log(route.params.surveyCategory)
  const [isQuestionsLoading, setIsQuestionsLoading] = useState(false)
  const [isQuestionsError, setIsQuestionsError] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const { t } = useTranslation(['translation', 'survey'])
  const remainingTimeRef = useRef(useRemainingTime()) //

  const remainingTime  : number = useRemainingTime()




  useEffect(() => {
    setIsQuestionsLoading(true)

    const getAndSetQuestions = async () => {
      try {
        const questions: QuestionDataTypes[] = await t(route.params.surveyCategory, { ns: 'survey', returnObjects: true });
        setQuestions(questions);
        setIsQuestionsLoading(false);
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



  //if there is no loading and arror return content, otherwise return loading or error
  const renderContent = () => {
    if (isQuestionsLoading) return <ActivityIndicator />
    else if (isQuestionsError) return <Text>HATA !</Text>
    return <>
      <LikertQuestionHeader remainingTime={formatTime(remainingTime)} />
      <SurveyQuestions selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />

      <SurveyQuestionActions setSelectedAnswer={setSelectedAnswer} remainingtime={remainingTime} />
    </>
  }



  return (
    <View style={{ flex: 1 }}>
      {renderContent()}
    </View>
  )
}

export default LikertQuestionScreen
