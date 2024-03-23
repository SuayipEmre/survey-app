import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TabBarSurveyIcon } from '../../icons/tabBarSurveyIcon'

const HomeScreen = () => {
  return (
    <View style={{backgroundColor:'#fff',
     flex:1,}}>
      <Text style={{
        fontFamily :'Comfortaa-Bold'
      }}>HomeScreen</Text>
      <TabBarSurveyIcon color={'#000'}  size={23}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})