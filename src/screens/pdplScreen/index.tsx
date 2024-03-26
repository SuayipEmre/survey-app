import { StyleSheet, Switch, Text, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import BackgroundImage from '../../components/backgroundImage'
import Button from '../../components/button'
import DataPolicyAgreementSwitchItem from '../../components/dataPolicyAgreementSwitchItem'
import { Colors } from '../../style/colors'
import { useTranslation } from 'react-i18next'
import AuthScreensLayout from '../../layouts/authScreensLayout'
import { firstSwitchText, secondSwitchText, thirdSwitchText } from './constants'
import commonStyles from '../../style/commonStyles'
import { AuthScreens } from '../../types/authScreensEnum'

const PDPLScreen = () => {
    const theme = useColorScheme()
    const color = Colors[theme!]
    const [isEnabled, setIsEnabled] = useState(false)
    const { t } = useTranslation()
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)



    return (
        <View>
            <BackgroundImage />
            <AuthScreensLayout activeScreen={AuthScreens.signup}>

                <View style={{
                    width: '80%',
                    alignItems: 'center',
                }}>
                    <Text style={[{ color: color.primary }, styles.title]}>{t('sensitiveDataMessage')}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '400', textAlign: 'center', fontFamily: 'Comfortaa-Bold' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's</Text>


                    <DataPolicyAgreementSwitchItem isRequiredField text={firstSwitchText} />
                    <DataPolicyAgreementSwitchItem isRequiredField text={secondSwitchText} />
                    <DataPolicyAgreementSwitchItem value={isEnabled} onChange={toggleSwitch} text={thirdSwitchText} />

                </View>
                <Button text={t('moveForward')} onPress={() => { }} />


            </AuthScreensLayout>
        </View>
    )
}

export default PDPLScreen

const styles = StyleSheet.create({
    title: {
        ...commonStyles.boldText,
        fontSize: 14,
        marginVertical: 7,
    },
    options_container: {
        width: '100%',
        ...commonStyles.centerElementsInRow,
        gap: 8,
        marginVertical: 10,
    },
    text: {
        width: 280,
        color: '#1d1d1b',
        flexWrap: 'wrap',
        ...commonStyles.regularText,
        fontSize: 12
    },
})