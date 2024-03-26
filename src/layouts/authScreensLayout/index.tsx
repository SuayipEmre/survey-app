import { View, useColorScheme } from 'react-native'
import React, { PropsWithChildren } from 'react'
import styles from './styles'
import ProgressPoint from '../../components/authProgressPoint'
import { AuthScreens } from '../../types/authScreensEnum'

type AuthenticationScreensContainerPropsType = {
    activeScreen: AuthScreens
}
const AuthScreensLayout: React.FC<PropsWithChildren<AuthenticationScreensContainerPropsType>> = ({ children, activeScreen }) => {
    const theme = useColorScheme()

    return (
        <View style={[
            theme == 'light' ? {backgroundColor:'rgba(255, 255, 255, 0.8)'} : { backgroundColor:'rgba(0, 0, 0, 0.8)'},
          , styles.content
        ]}>
            <View style={{
                width: 25, height: 3, backgroundColor: '#6d6d6d', position: 'absolute',
                top: 10
            }} />
            {children}

            <ProgressPoint activeTab={activeScreen} />
        </View>
    )
}

export default AuthScreensLayout

