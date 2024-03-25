import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LeftArrowIcon from '../../../icons/leftArrow'
import { useThemeColor } from '../../../store/features/theme/hooks'
import { useTranslation } from 'react-i18next'
import { useCompletedQuestions, useCurrentStep, useQuestions } from '../../../store/survey/hooks'
import { setCompleteQuestion, setCurrentStep } from '../../../store/survey/actions'

type SurveyQuestionActionsPropsType = {
  setSelectedAnswer: (answer: string) => void,
  remainingtime : number,
}


const SurveyQuestionActions : React.FC<SurveyQuestionActionsPropsType> = ({  setSelectedAnswer, remainingtime}) => {


  const{t} = useTranslation()
  const completedQuestions = useCompletedQuestions()
  const questions = useQuestions()
  const step = useCurrentStep()

  const handleIncreaseStep = () => {
    if(step < 9){
      //before change the question, add current question to completed questions.
      setCompleteQuestion({
        isAdd : true,
        isRemove : false,
        clearAll : false,
        question : {
          ...questions[step],
          questionResponseTimeInSeconds : 1800 - remainingtime
        }
      })
      setCurrentStep(step + 1)

      setSelectedAnswer('')
    } else if(step == 9 ){
        setCompleteQuestion({isCompletedSurvey : true})
    }
  }

  
  

  const handleDecreaseStep = () => {
    if (step == 0){
      setCompleteQuestion({
        isAdd : false,
        isRemove : false,
        clearAll : true,
        question : {
          ...questions[step],
          questionResponseTimeInSeconds : 1800 - remainingtime
        }
      })
    }
    if(step > 0){
      setCompleteQuestion({
        isAdd : false,
        isRemove : true,
        clearAll : false,
        question : {
          ...questions[step],
          questionResponseTimeInSeconds : 1800 - remainingtime
        }
      })
      setCurrentStep(step - 1)
    }
  }


  console.log(completedQuestions)



  const color = useThemeColor()
  return (
    
    <View style={styles.container}>
      
      <View style={[{  backgroundColor: color.midblue}, styles.prev_question_container]}>
        <TouchableOpacity onPress={handleDecreaseStep}>
        <LeftArrowIcon size={24} color='#fff'  />
        </TouchableOpacity>


      </View>

      <TouchableOpacity style={[{backgroundColor: color.midblue},styles.next_question_button]} onPress={handleIncreaseStep}>
        <Text style={{
          color: '#fff'
        }}>{t('nextQuestion')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SurveyQuestionActions

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    gap:20,
    alignItems:'center',
    alignSelf :'center',
    marginBottom : 50,
    
  },
  prev_question_container:{
    width: 48,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
  },
  next_question_button:{
    
    height: 40,
    width : 142,
    alignItems:'center',
    justifyContent:'center',
    borderRadius : 40,
  },
})