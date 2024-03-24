import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigatorStackParamList } from './types';
import LandingScreen from '../screens/landingScreen';
import LikertQuestionScreen from '../screens/likertQuestionScreen';
import { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute, useNavigation, useRoute } from '@react-navigation/native';
import { useThemeColor } from '../store/features/theme/hooks';
import { Dimensions } from 'react-native';
import SurveyCategoryScreen from '../screens/surveyCategoryScreen';

const Stack = createNativeStackNavigator<MainNavigatorStackParamList>()



const { width } = Dimensions.get('window')

export const MainStack: React.FC = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const color = useThemeColor()

  const tabHiddenRoutes = ['LikertQuestionScreen']

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route)


    tabHiddenRoutes.includes(routeName as string) ?
      navigation.setOptions({ tabBarStyle: {
         display: "none" } }) :
      navigation.setOptions({ tabBarStyle: {
         display: "true",
          backgroundColor: color.primary,
          position: 'absolute',
          bottom: 30,
          width : 340,
          left: (width - 340) / 2,
          borderRadius: 40,
          height: 80,
          justifyContent: 'center'
         } })

  }, [navigation, route]);


  return (
    <Stack.Navigator initialRouteName='LandingScreen' >
      <Stack.Screen
        name='LandingScreen'
        component={LandingScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='LikertQuestionScreen'
        component={LikertQuestionScreen}
        options={{
          headerShown: false,
          
        }}
      />
       <Stack.Screen
        name='SurveyCategoryScreen'
        component={SurveyCategoryScreen}
        options={{
          headerShown: false,
          
        }}
      />


    </Stack.Navigator>
  )
}

