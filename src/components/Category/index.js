import React from 'react'
import {RectButton} from 'react-native-gesture-handler';
import {View, Text} from 'react-native'
import {styles} from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';


export function Category({
    title,
    icon,
    checked = false,
}){
    const { secondary50, secondary70 } = theme.colors;
    return (
        <RectButton style={styles.container}>
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
               <View style={[style.content,{opacity: checked ? 1 : 0.4 }]}>
                    <View style={checked ? styles.checked : styles.check}>
                        
                    </View>
                    <Text style={styles.title}>
                        {title}
                    </Text>
               </View>
            </LinearGradient>
        </RectButton>
    )
}