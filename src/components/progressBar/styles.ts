import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontFamily: 'Comfortaa-SemiBold',
    fontSize: 10,
    lineHeight: 11.15,
    fontWeight: '600',
    color: '#fff',
    opacity: 0.5,
  },
  steps_container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})