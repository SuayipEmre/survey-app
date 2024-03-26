import { StyleSheet } from 'react-native'
import commonStyles from '../../style/commonStyles'
export default StyleSheet.create({
  container: {
    ...commonStyles.centerElementsInRow,
    gap: 8,
  },
  progressBar: {
    height: 5,
    width: '90%',
    backgroundColor: '#4240BA',
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: 'white',
  },
  remainingProgress: {
    backgroundColor: '#4240BA',
  },
  step_text: {
    color: '#fff',
  },
  steps_text: {
    ...commonStyles.semiBoldText,
    fontSize: 10,
    lineHeight: 11.15,
    color: '#fff',
    opacity: 0.5,
  },
  steps_container: {
    ...commonStyles.centerElementsInRow,
  },
})