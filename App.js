import React from 'react';
import {StatusBar} from 'react-native'
import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import {Routes} from './src/routes/index';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


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
    <>
        <StatusBar
                barStyle="line-content"
                backgroundColor="transparent"
                translucent
            />
      <Routes/>
    </>
  );
}

