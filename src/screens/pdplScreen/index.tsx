import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthScreensContentContainer from '../../containers/AuthScreensContainer'
import BackgroundImage from '../../components/backgroundImage'
import Button from '../../components/button'
import DataPolicyAgreementSwitchItem from '../../components/dataPolicyAgreementSwitchItem'

const PDPLScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false)
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
                    <Text style={styles.title}>Hassas veriler hakkında</Text>
                    <Text style={{ fontSize: 12, fontWeight: '400', textAlign: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's</Text>


                    <DataPolicyAgreementSwitchItem isRequiredField text={firstSwitchText} />
                    <DataPolicyAgreementSwitchItem isRequiredField text={secondSwitchText} />
                    <DataPolicyAgreementSwitchItem value={isEnabled} onChange={toggleSwitch} text={thirdSwitchText} />

                </View>
                <Button text='İLERLE' onPress={() => { }} />


            </AuthScreensContentContainer>
        </View>
    )
}

export default PDPLScreen

const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 14,
        color: '#1d1d1b',
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