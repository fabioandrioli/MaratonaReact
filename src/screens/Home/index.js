import React from 'react'
import {View} from 'react-native'
import {styles} from './styles'

//componets imports
import {Profile} from '../../components/Profile'
import {ButtonAdd} from '../../components/ButtonAdd'
import {CategoryList} from '../../components/CategoryList'


export function Home(){
    return(
        <View>
            <View  style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>
            <CategoryList/>
        </View>
        
    )
}