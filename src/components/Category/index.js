import React from 'react'
import {RectButton} from 'react-native-gesture-handler';
import {View, Text} from 'react-native'
import {styles} from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

export function Category({
    title = "Test",
    Icon,
    checked = true,
}){
    const { secondary50, secondary70 } = theme.colors;
    return (
        <RectButton style={styles.container}>
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
    
               <View style={[styles.content,{opacity: checked ? 1 : 0.4 }]}>
                    <View style={checked ? styles.checked : styles.check}>
                    <Icon width={48} height={48}/>
                    </View>
                    <Text style={styles.title}>
                        {title}
                    </Text>
               </View>
            </LinearGradient>
        </RectButton>
    )
}