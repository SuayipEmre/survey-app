import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import HomeIcon from '../../../icons/homeIcon'
import TimeProgressIcon from '../../../icons/timeProgressIcon'
import { useThemeColor } from '../../../store/features/theme/hooks'
import styles from './styles'
import ProgressBar from '../../progressBar'
import { useTranslation } from 'react-i18next'
import { useCurrentStep, useQuestions, useRemainingTime } from '../../../store/features/survey/hooks'
import { setRemainingTime } from '../../../store/features/survey/actions'
import { formatTime } from '../../../utils/date/formatTime'



const LikertQuestionHeader: React.FC = ( ) => {
  const color = useThemeColor()
  const { t } = useTranslation()
  const step = useCurrentStep() + 1
  const questions = useQuestions()
  const remainingTime = useRemainingTime()
  //timer useEffect  --> time = 30min
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


  return (
    <View style={[{ backgroundColor: color.midblue }, styles.container]}>



      <View style={styles.top_content}>

        <View style={styles.icon_container}>
          <HomeIcon color={color.midblue} size={13.88} />
        </View>

        <View>
          <TimeProgressIcon size={89} color='#4240BA' progress={10} />
          <Text style={styles.remaining_time_text}>{formatTime(remainingTime)}</Text>
        </View>

      </View>

      <View style={styles.bottom_content}>
        <Text style={styles.survey_topic_title}>{t('surveyTopicTitle')}</Text>
        <ProgressBar progress={step * 0.1} step={step} steps={questions.length} />
      </View>

    </View>
  )
}

export default LikertQuestionHeader