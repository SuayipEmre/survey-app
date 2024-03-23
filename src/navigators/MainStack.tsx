import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  MainNavigatorStackParamList } from './types';
import LandingScreen from '../screens/landingScreen';


const Stack = createNativeStackNavigator<MainNavigatorStackParamList>()


export const MainStack: React.FC = () => {

  return (
    <Stack.Navigator initialRouteName='LandingScreen' > 
      <Stack.Screen
        name='LandingScreen'
        component={LandingScreen}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>
  )
}


