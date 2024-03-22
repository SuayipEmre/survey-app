import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type GenderItemPropsTypes = {
    gender: string
}
const GenderItem: React.FC<GenderItemPropsTypes> = ({ gender }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.genre_text}>{gender}</Text>
        </View>
    )
}

export default GenderItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '40%',
        paddingVertical: 14,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    genre_text: {
        fontSize: 12,
        fontWeight: '600'
    }

})