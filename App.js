import React from 'react';
import {StatusBar} from 'react-native'
import {SignIn} from './src/screens/signIn'

export default function App() {
  return (
    <>
        <StatusBar
                barStyle="line-content"
                backgroundColor="transparent"
                translucent
            />
      <SignIn/>
    </>
  );
}

