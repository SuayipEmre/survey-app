import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationNavigatorStackParamList, MainNavigatorStackParamList } from './types';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/signupScreen';
import HomeScreen from '../screens/homeScreen';


const Stack = createNativeStackNavigator<MainNavigatorStackParamList>()


export const MainStack: React.FC = () => {

  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>
  )
}


