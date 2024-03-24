import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ClockIcon from '../../icons/clockIcon'
import CalendarIcon from '../../icons/calendarIcon'
import RightArrowIcon from '../../icons/rightArrow'
import { useThemeColor } from '../../store/features/theme/hooks'
import { useTranslation } from 'react-i18next'

const SurveyDataItem = () => {
    const { t } = useTranslation()
    const color = useThemeColor()
  return (
    <View style={styles.information_item}>

          <View style={styles.information_item_top_content}>
            <Text style={{ fontSize: 12, lineHeight: 13.38, fontFamily: 'Comfortaa-Regular', color: color.primary }}>{t('survey')}</Text>
            <RightArrowIcon size={13} color={color.primary} />
          </View>

          <View style={styles.information_item_bottom_content}>
            <CalendarIcon size={13} color={color.midblue} />
            <Text style={styles.date}>25.10.2023</Text>
            <ClockIcon size={13} color={color.midblue} />
            <Text style={styles.time_text}>14:52</Text>

          </View>
        </View>
  )
}

export default SurveyDataItem

const styles = StyleSheet.create({
    information_item: {
        width: '90%',
        height: 61,
        backgroundColor: '#E5E4E2',
        borderRadius:5,
        gap:9,
        marginTop:12,
        padding:9,
      },
      information_item_top_content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      information_item_bottom_content:{
        flexDirection:'row',
        alignItems:'center',
        gap:6,
      },
      date: {
        fontWeight: '300',
        fontSize: 10,
        lineHeight: 11.15,
        fontFamily: 'Comfortaa-Light',
      },
      time_text: {
        fontSize: 10,
        fontWeight: '300',
        lineHeight: 11.15,
        fontFamily: 'Comfortaa-Light',
      },
    
})