import { View, useColorScheme } from 'react-native'
import React from 'react'
import styles from './styles'

type AuthenticationScreensContainerPropsType = {
    children: React.ReactNode
}
const AuthScreensLayout: React.FC<AuthenticationScreensContainerPropsType> = ({ children }) => {
    const theme = useColorScheme()

    
    const color= {
        light : {
            bg : 'rgba(255, 255, 255, 0.5)' // #ffffff8
        },
        dark : {
            bg : 'rgba(0, 0, 0, 0.5)' // #00000080
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

export default AuthScreensLayout

