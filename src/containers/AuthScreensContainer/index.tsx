import { View } from 'react-native'
import React from 'react'
import styles from './styles'

type AuthenticationScreensContainerPropsType = {
    children: React.ReactNode
}
const AuthScreensContentContainer: React.FC<AuthenticationScreensContainerPropsType> = ({ children }) => {
    return (
        <View style={styles.content}>
            <View style={{
                width: 25, height: 3, backgroundColor: '#6d6d6d', position: 'absolute',
                top: 10
            }} />
            {children}
        </View>
    )
}

export default AuthScreensContentContainer

