import React from "react";
import { View,Text,ImageBackground } from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Fontisto} from '@expo/vector-icons';

//components imports
import {Background} from '../../components/Background'
import {Header} from '../../components/Header'

//styles imports
import {styles} from './styles'
import { theme } from '../../global/styles/theme';

//images imports
import {ImageBannerPng} from "../../assets/banner.png"

export function ApointmentDetails(){
    return(
        <Background>
            <Header 
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground 
                source={ImageBannerPng}
                style={styles.banner}
            >

            </ImageBackground>
            
        </Background>
    )
}