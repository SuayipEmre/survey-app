import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/backgroundImage'
import { useTranslation } from 'react-i18next'
import { SurveyCategoryType } from '../../types/surveyCategoryTypes'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { useThemeColor } from '../../store/features/theme/hooks'

const SurveyCategoryScreen = () => {
    const { t } = useTranslation(['translation','surveyCategories'])
    const categories : SurveyCategoryType[] = t('categories',{ns:'surveyCategories',  returnObjects: true })
    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()
    const color = useThemeColor()
    return (
        <View>
            <BackgroundImage />
            <View style={styles.content}>
                {
                    categories.map(item => (
                        <TouchableOpacity key={item.id} style={[{backgroundColor:color.secondary}, styles.button]} onPress={() => navigation.navigate('LikertQuestionScreen', {surveyCategory : item.categoryCode})}>
                            <Text style={[{color : color.primary}, styles.button_text]}>{item.categoryName}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default SurveyCategoryScreen

const styles = StyleSheet.create({
    content:{
        position:'absolute',
        width: '100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        zIndex:2,
        gap:12,
    },
    button:{
        width :'50%',
        alignItems:'center',
        justifyContent:'center',
        height:'10%',
        borderRadius : 10,
    },
    button_text:{
        fontWeight :'bold',
        fontSize :20,
        fontFamily :'Comfortaa-Bold',
    },
})