import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useThemeColor } from '../../store/features/theme/hooks'
import ListIcon from '../../icons/listIcon'
import SurveyDataItem from '../../components/surveyDataContent/surveyDataItem'
import SurveyDataTopContentItem from '../../components/surveyDataContent/topContentItem'


const SurveyDataScreen = () => {
  const { t } = useTranslation()
  const color = useThemeColor()
  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1, backgroundColor:color.third }}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={[{ color: color.primary }, styles.title]}>{t('completedSurveys')}</Text>


        <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30, }}>

          <SurveyDataTopContentItem value={30} text={t('score')} />

          <View style={{ width: 1, height: 50, backgroundColor: color.secondary }} />
          <SurveyDataTopContentItem value={7} text={t('total')} />

          <View style={{ width: 1, height: 50, backgroundColor: color.secondary }} />
          <SurveyDataTopContentItem value={2} text={t('today')} />
         

        </View>


        <View style={styles.content_title_container}>
          <ListIcon size={10} color='#000' />
          <Text style={styles.list_text}>{t('list')}</Text>
        </View>


        <SurveyDataItem />
        <SurveyDataItem />
        <SurveyDataItem />
        <SurveyDataItem />

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
    fontFamily: 'Comfortaa-Bold',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 17.84,
    marginVertical: 40,
  },
 
  content_title_container: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 12,

  },
  list_text: {
    fontFamily: 'Comfortaa-Bold',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 13.38
  },


})