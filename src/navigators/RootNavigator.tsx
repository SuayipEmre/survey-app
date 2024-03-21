import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationNavigatorStackParamList, MainNavigatorStackParamList, ProfileNavigatorStackParamList } from './types';
import { useEffect, useState } from 'react';
import { MainStack } from './MainStack';
import { ProfileStack } from './ProfileStack';
import { AuthenticationStack } from './AuthenticationStack';



type NativeStackNavigatorParamList = {
    AuthenticationNavigator: NavigatorScreenParams<AuthenticationNavigatorStackParamList>
}


const Tab = createBottomTabNavigator<BottomNavigatorRootStackParamList>()
const Stack = createNativeStackNavigator<NativeStackNavigatorParamList>()


type BottomNavigatorRootStackParamList = {
    MainNavigator: NavigatorScreenParams<MainNavigatorStackParamList>
    ProfileNavigator: NavigatorScreenParams<ProfileNavigatorStackParamList>
}


const RootNavigator: React.FC = () => {

    const [user, setUser] = useState(true)
  
  
  
  
    if (user) {
  
      return (
        <NavigationContainer >
          <Tab.Navigator
            initialRouteName='MainNavigator'
            screenOptions={{
              tabBarHideOnKeyboard: true,
              tabBarShowLabel: false,
            }}
          >
  
            <Tab.Screen
              name='MainNavigator'
              component={MainStack}
              options={{
              }}
            />
          
  
            <Tab.Screen
              name='ProfileNavigator'
              component={ProfileStack}
            
            />
  
  
          </Tab.Navigator>
        </NavigationContainer>
      )
    }
  
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name='AuthenticationNavigator' component={AuthenticationStack} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  
  
  
  }
  
  export default RootNavigator