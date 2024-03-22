import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileNavigatorStackParamList } from './types';
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


