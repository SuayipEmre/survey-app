import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  MainNavigatorStackParamList } from './types';
import HomeScreen from '../screens/homeScreen';


const Stack = createNativeStackNavigator<MainNavigatorStackParamList>()


export const MainStack: React.FC = () => {

  return (
    <Stack.Navigator initialRouteName='HomeScreen' > 
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


