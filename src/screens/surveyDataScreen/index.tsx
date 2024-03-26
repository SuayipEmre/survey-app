import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useThemeColor } from '../../store/features/theme/hooks'
import ListIcon from '../../icons/listIcon'
import SurveyDataItem from '../../components/surveyDataContent/surveyDataItem'
import SurveyDataTopContentItem from '../../components/surveyDataContent/topContentItem'
import { useCompletedSurveys } from '../../store/features/survey/hooks'
import i18 from '../../i18n/i18n'
import commonStyles from '../../style/commonStyles'


const SurveyDataScreen = () => {
  const [todayCount, setTodayCount] = useState(0)
  const { t } = useTranslation()
  const color = useThemeColor()
  const completedSurveys = useCompletedSurveys()


  useEffect(() => {
    let count = 0;
    completedSurveys.forEach((item) => {
      if (isToday(item.survey.completedDate?.date)) {
        count++
      }
    });
    setTodayCount(count)
  }, [completedSurveys])






  const isToday = (dates: any) => {
    const today = new Date();
    const dateTrArray = dates.date_tr.split(".");
    const dateEnArray = dates.date_en.split("/");

    const dateTrObject = new Date(dateTrArray[2], dateTrArray[1] - 1, dateTrArray[0]);
    const dateEnObject = new Date(dateEnArray[2], dateEnArray[0] - 1, dateEnArray[1]);

    return today.toDateString() === dateTrObject.toDateString() && today.toDateString() === dateEnObject.toDateString();
  }



  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1, backgroundColor: color.third }}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={[{ color: color.primary }, styles.title]}>{t('completedSurveys')}</Text>


        <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30, }}>

          <SurveyDataTopContentItem value={30} text={t('score')} />

          <View style={{ width: 1, height: 50, backgroundColor: color.secondary }} />
          <SurveyDataTopContentItem value={completedSurveys.length} text={t('total')} />

          <View style={{ width: 1, height: 50, backgroundColor: color.secondary }} />
          <SurveyDataTopContentItem value={todayCount} text={t('today')} />


        </View>


        <View style={styles.content_title_container}>
          <ListIcon size={10} color={color.primary} />
          <Text style={styles.list_text}>{t('list')}</Text>
        </View>

        {
          completedSurveys.length > 0 && completedSurveys.map((item, idx) => <SurveyDataItem
            key={idx}
            time={item.survey.completedDate?.time}
            date={i18.language == 'tr' ?
              item.survey.completedDate?.date.date_tr :
              item.survey.completedDate?.date.date_en}
          />
          )
        }

      </ScrollView>
    </SafeAreaView>
  )
}

export default SurveyDataScreen

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    alignItems: 'center',
  },
  title: {
    ...commonStyles.boldText,
    fontSize: 16,
    lineHeight: 17.84,
    marginVertical: 40,
  },

  content_title_container: {
    width: '90%',
    alignSelf: 'center',
    ...commonStyles.centerElementsInRow,
    gap: 6,
    marginTop: 12,

  },
  list_text: {
    ...commonStyles.boldText,
    fontSize: 12,
    lineHeight: 13.38
  },


})



