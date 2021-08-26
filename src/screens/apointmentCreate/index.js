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
import {GuildIcon} from '../../components/GuildIcon';
import {SmallInput} from '../../components/SmallInput';
import {TextArea} from '../../components/TextArea';
import {Button} from '../../components/Button';
import {ModalView} from '../../components/ModalView';

//screens imports
import { Guilds } from "../Guilds";

//styles imports
import {styles} from './styles'
import { theme } from '../../global/styles/theme';

//images imports
import ImageBannerPng from "../../assets/banner.png";

export function ApointmentCreate(){
    const [category,setCategory] = useState('');
    const [openGuildsModa, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState({});

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');


    const navigation = useNavigation();

    function handleOpenGuilds(){
      setOpenGuildsModal(true);
    }

    function handleCloseGuilds(){
        setOpenGuildsModal(false);
      }
    
      function handleGuildSelect(guildSelect){
        setGuild(guildSelect);
        setOpenGuildsModal(false);
      }
    
      function handleCategorySelect(categoryId) {
        setCategory(categoryId);
      } 

    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
            <ScrollView>
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
                    <RectButton onPress={handleOpenGuilds}>
                        <View style={styles.select}>
                        {
                            guild.icon ? <GuildIcon/> : <View style={styles.image}/>
                                
                        }
                            <View style={styles.selectBody}>
                                <Text style={styles.label}>
                                    {guild.name ? guild.name : "Selecione um servidor"}
                                </Text>
                            </View>
                            <Feather 
                                name="chevron-right"
                                color={theme.colors.heading}
                                size={18}
                            />
                        </View>
                    </RectButton>
                    <View style={styles.field}>
                        <View>
                            <Text style={styles.label}>
                                Dia e mês
                            </Text>
                            
                            <View style={styles.column}>
                                <SmallInput maxlength={2}/>
                                <Text style={styles.divider}>
                                    /
                                </Text>
                                <SmallInput maxlength={2}/>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>
                            Hora e minuto
                            </Text>
                            
                            <View style={styles.column}>
                                <SmallInput maxlength={2}/>
                                <Text style={styles.divider}>
                                    :
                                </Text>
                                <SmallInput maxlength={2}/>
                            </View>
                        </View>          
                    </View>
                    <View style={[styles.field,{marginBottom:12}]}>
                        <Text style={styles.label}>
                        Descrição
                        </Text>
                        <Text style={styles.caracteresLimit}>
                            Max 100 caracteres
                        </Text>
                    </View>
                    <TextArea 
                        multiline
                        maxlength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />

                    <View style={styles.footer}>
                        <Button
                            title="Agendar"
                        />
                    </View>
                </View>
            </ScrollView>

            <ModalView visible={openGuildsModa} closeModal={handleCloseGuilds}>
                <Guilds handleGuildSelect={handleGuildSelect}/>
            </ModalView>

        </KeyboardAvoidingView>
    )
}