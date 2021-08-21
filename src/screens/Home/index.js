import React from 'react'
import {View} from 'react-native'
import {styles} from './styles'

//componets imports
import {Profile} from '../../components/Profile'
import {ButtonAdd} from '../../components/ButtonAdd'
import {Category} from '../../components/Category'

export function Home(){
    return(
        <View>
            <View  style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>
            <View>
                <Category/>
            </View>
        </View>
        
    )
}