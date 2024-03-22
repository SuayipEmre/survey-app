import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type AuthenticationScreensContainerPropsType = {
    children: React.ReactNode
}
const AuthenticationScreensContainer: React.FC<AuthenticationScreensContainerPropsType> = ({ children }) => {
    return (
        <View style={styles.content}>
            <View style={{width : 25, height : 3, backgroundColor:'#6d6d6d', position:'absolute',
         top : 10}} />
            {children}
        </View>
    )
}

export default AuthenticationScreensContainer

const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        width: '100%',
        height: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
})