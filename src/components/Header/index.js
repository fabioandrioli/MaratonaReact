import React,{ ReactNode } from "react";
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

//styles imports
import {styles} from './styles'

export function Header({title,action=ReactNode}){
    const { secondary100,secondary40,heading  } = theme.colors;
    const navigation = useNavigation();
    function handleGoBack(){
        navigation.goBack();
    }
    return (
        <LinearGradient 
          style={styles.container}
          colors={[secondary100, secondary40]}
        >
          <BorderlessButton onPress={handleGoBack}>
            <Feather 
              name="arrow-left"
              size={24}
              color={heading}
            />
          </BorderlessButton>
    
          <Text style={styles.title}>
            { title }
          </Text>
    
          {
            action 
            ? 
            <View>
              { action }
            </View>
            :
            <View style={{ width: 24 }}/>
          }
        </LinearGradient>
    );
}