import React from 'react';
import {StatusBar} from 'react-native'
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import {SignIn} from './src/screens/signIn'
import {Home} from './src/screens/Home'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {Background} from './src/components/Background'

export default function App() {
  //retorna um boleando dizendo se carregou ou não as fontes
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <Background>
        <StatusBar
                barStyle="line-content"
                backgroundColor="transparent"
                translucent
            />
      <Home/>
    </Background>
  );
}

