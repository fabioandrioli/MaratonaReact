import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {View,Text,Image} from 'react-native'
import {styles} from './styles'


//images imports
import IlustrationImg from '../../assets/illustration.png'

//componets imports
import {ButtonIcon} from '../../components/ButtonIcon/index'
import {Background} from '../../components/Background'

//hooks imports
import {useAuth} from '../../hooks/AuthHooks'

export function SignIn(){
    const navigation = useNavigation();

    const {user} = useAuth();

    console.log(user)

    function handleNavigationSiginIn() {
        navigation.navigate('Home')
    }

    return(
        <Background>
            <View style={styles.container}>
            
                <Image 
                    source={IlustrationImg} 
                    resizeMode="stretch"
                    style={styles.image}/>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conect-se {`\n`}
                        e organize suas {`\n`}
                        jogatinas
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie gurpos para jogar seus games{`\n`}
                        favoritos com seus amigos
                    </Text>
                    <ButtonIcon title="Entre com o Discord" onPress={handleNavigationSiginIn}/>
                </View>
            </View>
        </Background>
    )
}