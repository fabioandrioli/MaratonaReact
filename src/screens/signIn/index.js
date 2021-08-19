import React from 'react'
import {View,Text,Image} from 'react-native'
import {styles} from './styles'

//images imports
import IlustrationImg from '../../assets/illustration.png'

//componets imports
import {ButtonIcon} from '../../components/ButtonIcon/index'

export function SignIn(){
    return(
        <View style={styles.container}>
          
            <Image 
                source={IlustrationImg} 
                resizeMode="stretch"
                style={styles.image}/>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conect-se {`\n`}
                    e organize suas {`\n`}
                    jogatinas  {`\n`}
                </Text>
                <Text style={styles.subtitle}>
                    Crie gurpos para jogar seus games{`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon title="Entre com o Discord"/>
            </View>
        </View>
        
    )
}