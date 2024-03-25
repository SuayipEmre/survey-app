import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { QuestionDataTypes } from '../../types/questionDataTypes'
import { useThemeColor } from '../../store/features/theme/hooks'
import { useCurrentStep, useQuestions } from '../../store/features/survey/hooks'
import styles from './styles'
import { useTranslation } from 'react-i18next'

type SurveyQuestionsPropsType = {
  selectedAnswer: string,
  setSelectedAnswer: (answer: string) => void,
}

const SurveyQuestions: React.FC<SurveyQuestionsPropsType> = ({ selectedAnswer, setSelectedAnswer }) => {
  const color = useThemeColor()
  const questions = useQuestions()
  const step = useCurrentStep()
  const{t} = useTranslation()
  const questionItem: QuestionDataTypes = questions[step]


  return (
    <View style={styles.container}>
      {questionItem ? (
        <>
          <Text style={[{color : color.primary}, styles.question]}>{questionItem.question}</Text>
          {
            //if questions's length greater than 0, questions will be visible.
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
                        
                        selectedAnswer === item ? { backgroundColor: color.midblue} : { color: color.primary },
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
        <Text style={styles.question}>{t('questionNotFound')}</Text>
      )}

    </View>
  )
}

export default SurveyQuestions

