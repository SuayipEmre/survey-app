import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useThemeColor } from '../../store/features/theme/hooks'
import ListIcon from '../../icons/listIcon'
import SurveyDataItem from '../../components/surveyDataItem'


const SurveyDataScreen = () => {
  const { t } = useTranslation()
  const color = useThemeColor()
  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1, }}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={[{ color: color.primary }, styles.title]}>{t('completedSurveys')}</Text>


        <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30, }}>
          <View style={styles.information_item_container}>
            <Text style={[{ color: color.midblue }, styles.info_value]}>30</Text>
            <Text style={[{ color: color.primary }, styles.info_desc]}>{t('score')}</Text>
          </View>

          <View style={{ width: 1, height: 50, backgroundColor: '#D9D9D9' }} />



          <View style={styles.information_item_container}>
            <Text style={[{ color: color.midblue }, styles.info_value]}>7</Text>
            <Text style={[{ color: color.primary }, styles.info_desc]}>{t('total')}</Text>
          </View>

          <View style={{ width: 1, height: 50, backgroundColor: '#D9D9D9' }} />


          <View style={styles.information_item_container}>
            <Text style={[{ color: color.midblue }, styles.info_value]}>2</Text>
            <Text style={[{ color: color.primary }, styles.info_desc]}>{t('today')}</Text>
          </View>

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
  information_item_container: {
    height: 57,
    alignItems: 'center',
    marginHorizontal: 12,
    gap: 2,
  },
  info_value: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 30,
    lineHeight: 33.45,
    fontWeight: '400'
  },
  info_desc: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 17.84,
    fontFamily: 'Comfortaa-Bold',
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