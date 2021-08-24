import {RectButton} from 'react-native-gesture-handler';
import React from 'react'
import {View, Text} from 'react-native'
import {styles} from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

export function Category({
    title = "Test",
    Icon,
    checked = true,
    hasCheckBox = false,
    ...rest
}){
    const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;
    return (
        <RectButton 
            {...rest}
        >
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
    
               <LinearGradient 
                    style={[styles.content,{opacity: checked ? 1 : 0.5 }]}
                    colors={[checked ? secondary85 : secondary50, secondary40]}
                >
                    {
                       hasCheckBox && <View style={checked ? styles.checked : styles.check}/>
                    }
                    <Icon width={48} height={48}/>
                    <Text style={styles.title}>
                        {title}
                    </Text>
               </LinearGradient>
            </LinearGradient>
        </RectButton>
    )
}