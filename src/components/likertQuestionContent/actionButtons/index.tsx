import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LeftArrowIcon from '../../../icons/leftArrow'
import { useThemeColor } from '../../../store/features/theme/hooks'
import { useTranslation } from 'react-i18next'

type SurveyQuestionActionsPropsType = {
  setSelectedAnswer: (answer: string) => void,
  setStep: (step: number) => void,
  step: number,
}


const SurveyQuestionActions : React.FC<SurveyQuestionActionsPropsType> = ({step, setStep, setSelectedAnswer}) => {


  const{t} = useTranslation()
  const handleIncreaseStep = () => {
    if(step < 9){
      setStep(step + 1)
      setSelectedAnswer('')
    }
  }

  const handleDecreaseStep = () => {
    if(step > 0){
      setStep(step - 1)
    }
  }



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