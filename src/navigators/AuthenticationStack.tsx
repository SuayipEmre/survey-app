import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationNavigatorStackParamList } from './types';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/signupScreen';
import PDPLScreen from '../screens/pdplScreen';


const Stack = createNativeStackNavigator<AuthenticationNavigatorStackParamList>()


export const AuthenticationStack: React.FC = () => {

  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='SignupScreen'
        component={SignUpScreen}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='PDPLScreen'
        component={PDPLScreen}
        options={{
          headerShown: false
        }}
      />



    </Stack.Navigator>
  )
}


