import  React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../screens/home/index'
import {SignIn} from '../screens/signin/index'

const Stack = createStackNavigator();
const ModalOptions = {
    cardStyle: {
        backgroundColor: 'transparent',
      },
}

export function AuthRoutes() {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={ModalOptions}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignIn" component={SignIn} />
            
        </Stack.Navigator>
    );
  }
  