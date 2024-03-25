import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
type ProgressPropsType = {
    progress: number
    step: number,
    steps: number
}

const ProgressBar: React.FC<ProgressPropsType> = ({ progress, step, steps }) => {
    return (

        <View style={styles.container}>
            
                 {/*Progress bar*/}
            <View style={styles.progressBar}>
                <View style={[styles.progress, { flex: progress }]} />
                <View style={[styles.remainingProgress, { flex: 1 - progress }]} />
            </View>


            {/*Steps sections*/}
            <View style={styles.steps_container}>
                <Text style={styles.step_text}>{step}</Text>
                <Text style={styles.steps_text}>/{steps}</Text>
            </View>

        </View>
    )
}

export default ProgressBar