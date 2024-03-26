import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useThemeColor } from '../../store/features/theme/hooks'
import { useCompletedSurveys } from '../../store/features/survey/hooks'
import SurveyDataScreenContainer from '../../containers/surveyDataScreenContainer'


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





  //check if the survey completion date is today?
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
        <SurveyDataScreenContainer completedSurveys={completedSurveys} todayCount={todayCount} />
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

})



