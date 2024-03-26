import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SurveyDataTopContentItem from '../../components/surveyDataContent/topContentItem'
import { useTranslation } from 'react-i18next'
import { useThemeColor } from '../../store/features/theme/hooks'
import ListIcon from '../../icons/listIcon'
import SurveyDataItem from '../../components/surveyDataContent/surveyDataItem'
import { CompletedSurveyType } from '../../store/features/survey/types'
import i18 from '../../i18n/i18n'
import styles from './styles'

type SurveyDataScreenContainerPropsType = {
    completedSurveys :  CompletedSurveyType[],
    todayCount : number
}
const SurveyDataScreenContainer : React.FC<SurveyDataScreenContainerPropsType> = ({completedSurveys, todayCount}) => {
    const{t} = useTranslation()
    const color = useThemeColor()

    return (
        <>
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
        </>
    )
}

export default SurveyDataScreenContainer
