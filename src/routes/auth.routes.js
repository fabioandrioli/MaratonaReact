import  React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../screens/home/index';
import {SignIn} from '../screens/signin/index';
import {ApointmentDetails} from '../screens/apointmentDetails/index';
import {ApointmentCreate} from '../screens/apointmentCreate/index';
import {theme} from '../global/styles/theme';

const Stack = createStackNavigator();
const ModalOptions = {
    cardStyle: {
        backgroundColor: theme.colors.secondary100,
      },
}

export function AuthRoutes() {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={ModalOptions}
            >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ApointmentDetails" component={ApointmentDetails} />
            <Stack.Screen name="ApointmentCreate" component={ApointmentCreate} />
            
        </Stack.Navigator>
    );
  }
  