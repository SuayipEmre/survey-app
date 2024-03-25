import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LeftArrowIcon from '../../../icons/leftArrow'
import { useThemeColor } from '../../../store/features/theme/hooks'
import { useTranslation } from 'react-i18next'
import {  useCurrentStep, useQuestions, useRemainingTime } from '../../../store/survey/hooks'
import { setCompleteQuestion, setCurrentStep } from '../../../store/survey/actions'

type SurveyQuestionActionsPropsType = {
  onPress : () => void,
  buttonText : string
}


const SurveyQuestionActions: React.FC<SurveyQuestionActionsPropsType> = ({  onPress, buttonText }) => {

  const remainingTime: number = useRemainingTime()
  const { t } = useTranslation()
  const questions = useQuestions()
  const step = useCurrentStep()

 



  const handleDecreaseStep = () => {
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
        <TouchableOpacity onPress={handleDecreaseStep}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 50,

  },
  prev_question_container: {
    width: 48,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next_question_button: {

    height: 40,
    width: 142,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
})