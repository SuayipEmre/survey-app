import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import ProfileScreenContainer from '../../containers/profilScreenContainer'
import { useThemeColor } from '../../store/features/theme/hooks'

const ProfileScreen = () => {
 
  const color = useThemeColor()

  return (
    <SafeAreaView style={{backgroundColor : color.third}}>
      <ScrollView
      showsVerticalScrollIndicator = {false}
      contentContainerStyle={{
        alignItems: 'center',
      }}>
        <ProfileScreenContainer />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

