import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../../style/colors'

type GenderItemPropsTypes = {
    gender: string
}
const GenderItem: React.FC<GenderItemPropsTypes> = ({ gender }) => {
    
    const theme = useColorScheme()

    const color = {
        light : {
            bg : '#fff'
            
        },
        dark :{
            bg : '#000'
        }
    }
    return (
        <View style={[{backgroundColor:  color[theme!].bg}, styles.container]}>
            <Text style={styles.genre_text}>{gender}</Text>
        </View>
    )
}

export default GenderItem

const styles = StyleSheet.create({
    container: {
        width: '40%',
        paddingVertical: 14,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    genre_text: {
        fontFamily :'Comfortaa-SemiBold',
        fontSize: 12,
        fontWeight: '600'
    }

})