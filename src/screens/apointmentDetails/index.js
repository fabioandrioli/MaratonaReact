import React from "react";
import { View,Text,ImageBackground, FlatList } from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Fontisto} from '@expo/vector-icons';

//components imports
import {Background} from '../../components/Background'
import {ListHeader} from '../../components/ListHeader'
import {Header} from '../../components/Header'
import {Member} from '../../components/Member'
import {ListDivider} from '../../components/ListDivider'
import {ButtonIcon} from '../../components/ButtonIcon'
import { ApointmentCreate } from "../apointmentCreate";
//styles imports
import {styles} from './styles'
import { theme } from '../../global/styles/theme';

//images imports
import ImageBannerPng from "../../assets/banner.png"

export function ApointmentDetails(){
    const members = [
        {
            id:"1",
            username:"Fábio",
            avatar_url:"https://github.com/fabioandrioli.png",
            status:"online",
        
        },
        {
            id:"2",
            username:"Carlos",
            avatar_url:"https://github.com/fabioandrioli.png",
            status:"online",
        
        },
    ]
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
                <View style={styles.bannerContent}>
                    <Text  style={styles.title}>
                        Lendário
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao chellenger sem perder uma partida da M10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida"/>
            </View>
        </Background>
    )
}