import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationNavigatorStackParamList, MainNavigatorStackParamList, ProfileNavigatorStackParamList } from './types';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/signupScreen';
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';


const Stack = createNativeStackNavigator<ProfileNavigatorStackParamList>()


export const ProfileStack: React.FC = () => {

  return (
    <Stack.Navigator initialRouteName='ProfileScreen'>
      <Stack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>
  )
}


