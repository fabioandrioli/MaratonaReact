import React, {useState} from "react";
import { 
    Text,
    View,
    Platform,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

//components imports
import {Background} from '../../components/Background';
import {Header} from '../../components/Header';
import {CategoryList} from '../../components/CategoryList';
import {GuildIcon} from '../../components/GuildIcon'


//styles imports
import {styles} from './styles'
import { theme } from '../../global/styles/theme';

//images imports
import ImageBannerPng from "../../assets/banner.png";

export function ApointmentCreate(){
    const [category,setCategory] = useState('');
    return(
        <Background>
            <Header 
                title="Agendar partida"
            />
            <Text style={[
                styles.label, 
                {marginLeft:24, marginTop:36, marginBottom:18}]}>
                Categoria
            </Text>

            <CategoryList 
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}

            />

            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                       {
                        // <View style={styles.image}/>
                            <GuildIcon/>
                       }
                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Selecione um servidor
                            </Text>
                        </View>
                        <Feather 
                            name="chevron-right"
                            color={theme.colors.heading}
                            size={18}
                        />
                    </View>
                </RectButton>
            </View>

        </Background>
    )
}