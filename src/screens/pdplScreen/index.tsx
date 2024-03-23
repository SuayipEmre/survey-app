import { StyleSheet, Switch, Text, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import AuthScreensContentContainer from '../../containers/AuthScreensContainer'
import BackgroundImage from '../../components/backgroundImage'
import Button from '../../components/button'
import DataPolicyAgreementSwitchItem from '../../components/dataPolicyAgreementSwitchItem'
import { Colors } from '../../style/colors'
import { useTranslation } from 'react-i18next'

const PDPLScreen = () => {
    const theme = useColorScheme()
    const color = Colors[theme!]
    const [isEnabled, setIsEnabled] = useState(false)
    const{t} = useTranslation()
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    const firstSwitchText = "*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and?"

    const secondSwitchText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis optio laudantium autem, mollitia necessitatibus officiis. Numquam praesentium similique reiciendis saepe, corporis exercitationem"

    const thirdSwitchText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."

    return (
        <View>
            <BackgroundImage />
            <AuthScreensContentContainer>

                <View style={{
                    width: '80%',
                    alignItems: 'center',
                }}>
                    <Text style={[{color : color.primary},styles.title]}>{t('sensitiveDataMessage')}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '400', textAlign: 'center',  fontFamily :'Comfortaa-Bold' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's</Text>


                    <DataPolicyAgreementSwitchItem isRequiredField text={firstSwitchText} />
                    <DataPolicyAgreementSwitchItem isRequiredField text={secondSwitchText} />
                    <DataPolicyAgreementSwitchItem value={isEnabled} onChange={toggleSwitch} text={thirdSwitchText} />

                </View>
                <Button text={t('moveForward')} onPress={() => { }} />


            </AuthScreensContentContainer>
        </View>
    )
}

export default PDPLScreen

const styles = StyleSheet.create({
    title: {
        fontFamily :'Comfortaa-Bold',
        fontWeight: '700',
        fontSize: 14,
        marginVertical: 7,
    },
    options_container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginVertical: 10,
    },
    text: {
        width: 280,
        color: '#1d1d1b',
        flexWrap: 'wrap',
        fontWeight: '400',
        fontSize: 12
    },
})