import { View, Text } from 'react-native'
import React from 'react'
import HomeIcon from '../../../icons/homeIcon'
import TimeProgressIcon from '../../../icons/timeProgressIcon'
import { useThemeColor } from '../../../store/features/theme/hooks'
import styles from './styles'
import ProgressBar from '../../progressBar'
import { useTranslation } from 'react-i18next'


type LikertQuestionHeaderPropsType = {
  remainingTime: string,
  step: number,
  steps : number
}
const LikertQuestionHeader: React.FC<LikertQuestionHeaderPropsType> = ({ remainingTime, step, steps }) => {
  const color = useThemeColor()
  const{t}  = useTranslation()

  return (
    <View style={[{ backgroundColor: color.midblue }, styles.container]}>



      <View style={styles.top_content}>

        <View style={styles.icon_container}>
          <HomeIcon color={color.midblue} size={13.88} />
        </View>

        <View>
          <TimeProgressIcon size={89} color='#4240BA' progress={10} />
          <Text style={styles.remaining_time_text}>{remainingTime}</Text>
        </View>

      </View>

      <View style={styles.bottom_content}>
        <Text style={styles.survey_topic_title}>{t('surveyTopicTitle')}</Text>
        <ProgressBar progress={step * 0.1} step={step} steps={steps} />
      </View>

    </View>
  )
}

export default LikertQuestionHeader