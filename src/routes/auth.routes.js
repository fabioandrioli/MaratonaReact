import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home} from '../screens/home'
import {SignIn} from '../screens/signin'

const Stack = createNativeStackNavigator();
const ModalOptions = {
    headerShown: false,
    cardStyle: {
        backgroundColor: 'transparent',
      },
      transparentCard: true,
}

export function AuthRoutes() {
    return (
        <Stack.Navigator
            screenOptions={ModalOptions}
            
        >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
  }
  