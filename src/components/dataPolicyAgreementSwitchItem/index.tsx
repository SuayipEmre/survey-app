import { StyleSheet, Switch, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../../style/colors'
import { useTranslation } from 'react-i18next'


type DataPolicyAgreementropsType = {
    isRequiredField? : boolean,
    value? : boolean,
    onChange? : (value : boolean) => void,
    text : string
}
const DataPolicyAgreementSwitchItem : React.FC<DataPolicyAgreementropsType> = ({isRequiredField, onChange, value, text}) => {
    const theme = useColorScheme()
    const color = Colors[theme!]
    const{t} = useTranslation()
  
    
    return (
        <View style={styles.container}>

            <Switch
                trackColor={{ false: '#b1b0ff', true: '#0300a3' }}
                thumbColor={value ? '#fff' : '#fff'}
                ios_backgroundColor="#b1b0ff"
                onValueChange={isRequiredField ? null : onChange}
                value={isRequiredField ? true : value}
            />
            <Text style={[{color: color.primary},styles.text]}>
                {text}
                {
                    isRequiredField && <Text style={styles.agree_text}>{t('agree')}</Text>
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
        fontFamily : 'Comfortaa-Regular',
        width:'80%',
        fontWeight: '400',
        fontSize: 12,
        textAlign:'left',
    },
    agree_text:{ fontWeight: '700', marginLeft:4, fontFamily :'Comfortaa-Bold' },

})