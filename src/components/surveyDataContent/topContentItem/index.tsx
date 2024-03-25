import {  Text, View } from 'react-native'
import React from 'react'
import { useThemeColor } from '../../../store/features/theme/hooks'
import styles from './styles'

type SurveyDataTopContentItemPropsType = {
    value: number,
    text: string
}
const SurveyDataTopContentItem: React.FC<SurveyDataTopContentItemPropsType> = ({ text, value }) => {
    const color = useThemeColor()

    return (

        <View style={styles.information_item_container}>
            <Text style={[{ color: color.midblue }, styles.info_value]}>{value}</Text>
            <Text style={[{ color: color.primary }, styles.info_desc]}>{text}</Text>
        </View>
    )
}

export default SurveyDataTopContentItem
