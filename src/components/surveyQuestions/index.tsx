import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { QuestionDataTypes } from '../../types/questionDataTypes'
import { useThemeColor } from '../../store/features/theme/hooks'
import { useCurrentStep, useQuestions } from '../../store/survey/hooks'

type SurveyQuestionsPropsType = {
  selectedAnswer: string,
  setSelectedAnswer: (answer: string) => void,
}

const SurveyQuestions: React.FC<SurveyQuestionsPropsType> = ({ selectedAnswer, setSelectedAnswer }) => {
  const color = useThemeColor()
  const questions = useQuestions()
  const step = useCurrentStep()

  const questionItem: QuestionDataTypes = questions[step]
  

  return (
    <View style={styles.container}>
  {questionItem ? (
      <>
        <Text style={styles.question}>{questionItem.question}</Text>
        {
          questions.length > 0 && (
            <View style={styles.question_options_container}>
              {
                questionItem.options.map((item, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={[
                      selectedAnswer === item ? { backgroundColor: color.midblue } : null,
                      selectedAnswer === item ? styles.active_option_button : styles.inactive_option_button
                    ]}
                    onPress={() => setSelectedAnswer(item)}
                  >
                    <Text style={[
                      selectedAnswer === item ? { backgroundColor: color.midblue } : { color: color.primary },
                      selectedAnswer === item ? styles.active_question_option : styles.inactive_question_option
                    ]}>{item}</Text>
                  </TouchableOpacity>
                ))
              }
            </View>
          )
        }
      </>
    ) : (
      <Text style={styles.question}>Soru bulunamadı.</Text>
    )}
 
    </View>
  )
}

export default SurveyQuestions


const base_style = StyleSheet.create({


  option_text: {
    fontFamily: 'Comfortaa-SemiBold',
    fontWeight: '600',

  },
  option_button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingVertical: 6,
    borderRadius: 30,
    height: 40,
  },


})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },

  question: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 20,
    lineHeight: 22.3,
    textAlign: 'center',
  },

  question_options_container: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  inactive_option_button: {
    backgroundColor: '#EFEFFF',
    ...base_style.option_button
  },
  active_option_button: {
    ...base_style.option_button
  },
  active_question_option: {
    ...base_style.option_text,
    color: '#fff',
    lineHeight: 20.07,
  },
  inactive_question_option: {
    ...base_style.option_text,
    lineHeight: 17.84,
    fontSize: 16,
    opacity: 0.4,
  }
})