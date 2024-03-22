import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'


type DataPolicyAgreementropsType = {
    isRequiredField? : boolean,
    value? : boolean,
    onChange? : (value : boolean) => void,
    text : string
}
const DataPolicyAgreementSwitchItem : React.FC<DataPolicyAgreementropsType> = ({isRequiredField, onChange, value, text}) => {
    return (
        <View style={styles.container}>

            <Switch
                trackColor={{ false: '#b1b0ff', true: '#0300a3' }}
                thumbColor={value ? '#fff' : '#fff'}
                ios_backgroundColor="#b1b0ff"
                onValueChange={isRequiredField ? null : onChange}
                value={isRequiredField ? true : value}
            />
            <Text style={styles.text}>
                {text}
                {
                    isRequiredField && <Text style={{ fontWeight: '700' }}>Kabul ediyorum</Text>
                }
            </Text>
        </View>
    )
}

export default DataPolicyAgreementSwitchItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginVertical: 10,
    },
    text: {
        width:'80%',
        color: '#1d1d1b',
        fontWeight: '400',
        fontSize: 12,
        textAlign:'left',
    },
})