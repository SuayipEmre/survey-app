import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AuthenticationNavigatorStackParamList,
  MainNavigatorStackParamList,
  ProfileNavigatorStackParamList,
  SurveyDataNavigatorStackParamList,
} from './types';
import { useEffect, useState } from 'react';
import { MainStack } from './MainStack';
import { ProfileStack } from './ProfileStack';
import { AuthenticationStack } from './AuthenticationStack';
import { Dimensions, View, useColorScheme } from 'react-native';
import { Colors } from '../style/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import SurveyDataScreen from '../screens/surveyDataScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useUserSession } from '../store/features/auth/hooks';
import { getUserSession } from '../utils/getUserSession';
import { setUserSession } from '../store/features/auth/actions';
import { TabBarSurveyIcon } from '../icons/tabBarSurveyIcon';


type NativeStackNavigatorParamList = {
  AuthenticationNavigator: NavigatorScreenParams<AuthenticationNavigatorStackParamList>;
};

const Tab = createBottomTabNavigator<BottomNavigatorRootStackParamList>()
const Stack = createNativeStackNavigator<NativeStackNavigatorParamList>()

type BottomNavigatorRootStackParamList = {
  MainNavigator: NavigatorScreenParams<MainNavigatorStackParamList>;
  SurveyDataNavigator: NavigatorScreenParams<SurveyDataNavigatorStackParamList>
  ProfileNavigator: NavigatorScreenParams<ProfileNavigatorStackParamList>
}

const { width } = Dimensions.get('window')

const RootNavigator: React.FC = () => {
  const theme = useColorScheme()
  const color = Colors[theme!]

  const userSession = useUserSession()



  useEffect(() => {

    const getUser = async () => {
      const userSession = await getUserSession()
      setUserSession(userSession)
    }
    getUser()

  }, [])

  if (!userSession) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="MainNavigator"
          screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: '#9593FF',
            tabBarInactiveTintColor: color.secondary,
            tabBarStyle: {
              backgroundColor: color.primary,
              position: 'absolute',
              bottom: 30,
              width : 340,
              left: (width - 340) / 2,
              borderRadius: 40,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center'
            },
          }}>
          <Tab.Screen
            name="SurveyDataNavigator"
            component={SurveyDataScreen}
            options={{
              tabBarLabel: 'Anket',
              tabBarIcon: ({ color, size }) => (
                <TabBarSurveyIcon color={color} size={size} />
              )
            }}
          />

          <Tab.Screen
            name="MainNavigator"
            component={MainStack}
            options={{
              tabBarLabel: '',
              tabBarItemStyle: {
                position: 'absolute',
                top : -20,
                left: (340 - 50) / 2,
                width: 50,
                height: 50,
                borderRadius: 25,
            
              },
              tabBarIcon: (props) => (
                <View style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: props.focused ? '#0300A3' : color.primary

                }}>
                  <Entypo name="home" color={'#ffffff'}  size={20} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="ProfileNavigator"
            component={ProfileStack}
            options={{
              tabBarLabel: 'Profil',

              tabBarIcon: ({ color, size }) => (
                <>
                  <FontAwesome name="user" color={color} size={size} />
                </>
              ),

            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="AuthenticationNavigator"
          component={AuthenticationStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
