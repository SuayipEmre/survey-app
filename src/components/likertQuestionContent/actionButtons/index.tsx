import {  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LeftArrowIcon from '../../../icons/leftArrow'
import { useThemeColor } from '../../../store/features/theme/hooks'
import {  useCurrentStep, useQuestions, useRemainingTime } from '../../../store/features/survey/hooks'
import { setCompleteQuestion, setCurrentStep } from '../../../store/features/survey/actions'
import styles from './styles'


type SurveyQuestionActionsPropsType = {
  onPress : () => void,
  buttonText : string
}


const SurveyQuestionActions: React.FC<SurveyQuestionActionsPropsType> = ({  onPress, buttonText }) => {

  const remainingTime: number = useRemainingTime()
  const questions = useQuestions()
  const step = useCurrentStep()

 


  const handlePreviousQuestion = () => {
    if (step == 0) {
      //clear all data
      setCompleteQuestion({
        clearAll: true,
      })
    }
    if (step > 0) {
      //remove question on completedQuestions
      setCompleteQuestion({
        isAdd: false,
        isRemove: true,
        clearAll: false,
        question: {
          ...questions[step],
          questionResponseTimeInSeconds: 1800 - remainingTime
        }
      })
      setCurrentStep(step - 1)
    }
  }




  const color = useThemeColor()
  return (

    <View style={styles.container}>

      <View style={[{ backgroundColor: color.midblue }, styles.prev_question_container]}>
        <TouchableOpacity onPress={handlePreviousQuestion}>
          <LeftArrowIcon size={24} color='#fff' />
        </TouchableOpacity>


      </View>

      <TouchableOpacity style={[{ backgroundColor: color.midblue }, styles.next_question_button]} onPress={onPress}>
        <Text style={{
          color: '#fff'
        }}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SurveyQuestionActions

