import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LikertQuestionHeader from '../../components/likertQuestionContent/likertQuestionHeader'
import SurveyQuestions from '../../components/surveyQuestions'
import { useTranslation } from 'react-i18next'
import { QuestionDataTypes } from '../../types/questionDataTypes'
import LeftArrowIcon from '../../icons/leftArrow'
import { useThemeColor } from '../../store/features/theme/hooks'
import SurveyQuestionActions from '../../components/likertQuestionContent/actionButtons'

const LikertQuestionScreen = () => {
  const [step, setStep] = useState(0)
  const color = useThemeColor()
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const { t } = useTranslation(['translation', 'quiz'])
  const questions: QuestionDataTypes[] = t('sport', { ns: 'quiz', returnObjects: true })
  const [remainingTime, setRemainingTime] = useState(1800)// 30 min

  useEffect(() => {

    let interval: NodeJS.Timeout

    if (remainingTime > 0) {
      // start timer
      interval = setInterval(() => {
        setRemainingTime(remainingTime => remainingTime - 1)
      }, 1000)
    }


    return () => clearInterval(interval)
  }, [remainingTime])


  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60;
    return `00:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }



  return (
    <View style={{ flex: 1 }}>
      <LikertQuestionHeader remainingTime={formatTime(remainingTime)} step={step + 1} steps={questions.length} />
      <SurveyQuestions selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} step={step} questions={questions} />

      <SurveyQuestionActions setSelectedAnswer={setSelectedAnswer} setStep={setStep} step={step} />
    </View>
  )
}

export default LikertQuestionScreen
