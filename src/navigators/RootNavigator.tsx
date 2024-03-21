import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AuthenticationNavigatorStackParamList,
  MainNavigatorStackParamList,
  ProfileNavigatorStackParamList,
  SurveyDataNavigatorStackParamList,
} from './types';
import {useEffect, useState} from 'react';
import {MainStack} from './MainStack';
import {ProfileStack} from './ProfileStack';
import {AuthenticationStack} from './AuthenticationStack';
import {Dimensions, Text, View, useColorScheme} from 'react-native';
import {Colors} from '../style/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import SurveyDataScreen from '../screens/surveyDataScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
type NativeStackNavigatorParamList = {
  AuthenticationNavigator: NavigatorScreenParams<AuthenticationNavigatorStackParamList>;
};

const Tab = createBottomTabNavigator<BottomNavigatorRootStackParamList>();
const Stack = createNativeStackNavigator<NativeStackNavigatorParamList>();

type BottomNavigatorRootStackParamList = {
  MainNavigator: NavigatorScreenParams<MainNavigatorStackParamList>;
  SurveyDataNavigator: NavigatorScreenParams<SurveyDataNavigatorStackParamList>;
  ProfileNavigator: NavigatorScreenParams<ProfileNavigatorStackParamList>;
};

const {width, height} = Dimensions.get('window');

const RootNavigator: React.FC = () => {
  const theme = useColorScheme();

  const [user, setUser] = useState(true);

  const color = Colors[theme!];

  if (user) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="MainNavigator"
          screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#5c3ebc',
            tabBarInactiveTintColor: color.secondary,
            tabBarStyle: {
              backgroundColor: color.primary,
              position: 'absolute',
              bottom: 30,
              left: 30,
              right: 30,
              borderRadius: 20,
              height: 70,
            },
          }}>
          <Tab.Screen
            name="SurveyDataNavigator"
            component={SurveyDataScreen}
            options={{}}
          />

          <Tab.Screen
            name="MainNavigator"
            component={MainStack}
            options={{
              tabBarItemStyle: {
                position: 'absolute',
                bottom: 20,
                height: 50,
                width: 50,
                left: width / 2.8,
                borderRadius: 25,
                backgroundColor: color.primary,
              },
              tabBarActiveTintColor: '#fff',
              tabBarActiveBackgroundColor: color.primary,
              tabBarIcon: ({color, size}) => (
                <Entypo name="home" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="ProfileNavigator"
            component={ProfileStack}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color, size}) => (
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
