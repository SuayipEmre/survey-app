import { Text, View } from 'react-native'
import React from 'react'
import ClockIcon from '../../../icons/clockIcon'
import CalendarIcon from '../../../icons/calendarIcon'
import RightArrowIcon from '../../../icons/rightArrow'
import { useThemeColor } from '../../../store/features/theme/hooks'
import { useTranslation } from 'react-i18next'
import styles from './styles'

const SurveyDataItem: React.FC = () => {
  const { t } = useTranslation()
  const color = useThemeColor()
  return (
    <View style={[{backgroundColor : color.secondary}, styles.information_item]}>

      <View style={styles.information_item_top_content}>
        <Text style={{ fontSize: 12, lineHeight: 13.38, fontFamily: 'Comfortaa-Regular', color: color.primary }}>{t('survey')}</Text>
        <RightArrowIcon size={13} color={color.primary} />
      </View>

      <View style={styles.information_item_bottom_content}>
        <CalendarIcon size={13} color={color.midblue} />
        <Text style={[{color : color.primary}, styles.date]}>25.10.2023</Text>
        <ClockIcon size={13} color={color.midblue} />
        <Text style={[{color : color.primary}, styles.time_text]}>14:52</Text>

      </View>
    </View>
  )
}

export default SurveyDataItem

