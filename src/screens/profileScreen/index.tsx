import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import ProfileScreenContainer from '../../containers/profilScreenContainer'

const ProfileScreen = () => {
 

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{
        alignItems: 'center',
      }}>
        <ProfileScreenContainer />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

