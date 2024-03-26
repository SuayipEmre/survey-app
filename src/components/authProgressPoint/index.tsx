import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeColor } from '../../store/features/theme/hooks'
import { AuthScreens } from '../../types/authScreensEnum'

type AuthProgressPoint = {
    activeTab : AuthScreens
}


type screensType = {
    id : number,
    screen : AuthScreens
}

const screens : screensType[] = [
    {
        id: 0,
        screen: AuthScreens.login,
    },

    {
        id: 1,
        screen: AuthScreens.signup,
    },

    {
        id: 2,
        screen: AuthScreens.pdpl,
    },
]


const AuthProgressPoint : React.FC<AuthProgressPoint> = ({activeTab}) => {



  
    const color = useThemeColor()
    return (
        <View style={{ flexDirection: 'row', gap:8 }}>
            {screens.map(item => (
                <View
                    key={item.id}
                    style={{
                        width: activeTab === item.screen ? 16 : 10,
                        height: 5,
                        borderRadius: 10,
                        opacity : activeTab == item.screen ? 1 : 0.3,
                        backgroundColor: activeTab === item.screen ? color.midblue : color.primary,
                    }}
                />
            ))}
        </View>
    )
}

export default AuthProgressPoint

const styles = StyleSheet.create({})