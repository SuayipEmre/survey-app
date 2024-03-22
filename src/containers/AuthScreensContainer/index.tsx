import { View, useColorScheme } from 'react-native'
import React from 'react'
import styles from './styles'
import { Colors } from '../../style/colors'

type AuthenticationScreensContainerPropsType = {
    children: React.ReactNode
}
const AuthScreensContentContainer: React.FC<AuthenticationScreensContainerPropsType> = ({ children }) => {
    const theme = useColorScheme()

    
    const color= {
        light : {
            bg : 'rgba(255, 255, 255, 0.5)'
        },
        dark : {
            bg : 'rgba(0, 0, 0, 0.5)'
        }
    }
    return (
        <View style={[{backgroundColor: color[theme!].bg}, styles.content] }>
            <View style={{
                width: 25, height: 3, backgroundColor: '#6d6d6d', position: 'absolute',
                top: 10
            }} />
            {children}
        </View>
    )
}

export default AuthScreensContentContainer

