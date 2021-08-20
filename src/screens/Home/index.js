import React from 'react'
import {View} from 'react-native'
import {styles} from './styles'

//componets imports
import {Profile} from '../../components/Profile'

export function Home(){
    return(
        <View>
            <View  style={styles.header}>
                <Profile/>
            </View>
        </View>
        
    )
}