import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LeftArrowIcon from '../../../icons/leftArrow'
import { useThemeColor } from '../../../store/features/theme/hooks'
import { useCurrentStep, useQuestions, useRemainingTime } from '../../../store/features/survey/hooks'
import { questionOperations, setCurrentStep } from '../../../store/features/survey/actions'
import styles from './styles'
import Button from '../../button'


type SurveyQuestionActionsPropsType = {
  onPress: () => void,
  buttonText: string
}


const SurveyQuestionActions: React.FC<SurveyQuestionActionsPropsType> = ({ onPress, buttonText }) => {

  const remainingTime: number = useRemainingTime()
  const questions = useQuestions()
  const step = useCurrentStep()
  const color = useThemeColor()




  //return previous survey question
  const handlePreviousQuestion = () => {
    if (step == 0) {
      //clear all data
      questionOperations({
        clearAll: true,
      })
      return
    }

    //remove question on completedQuestions
    questionOperations({
      isRemove: true,
      question: {
        ...questions[step],
        questionResponseTimeInSeconds: 1800 - remainingTime
      }
    })
    setCurrentStep(step - 1)
  }




  return (

    <View style={styles.container}>

      <View style={[{ backgroundColor: color.midblue }, styles.prev_question_container]}>
        <TouchableOpacity onPress={handlePreviousQuestion}>
          <LeftArrowIcon size={24} color='#fff' />
        </TouchableOpacity>


      </View>
      
      <Button onPress={onPress} text={buttonText} />


    </View>
  )
}

export default SurveyQuestionActions

