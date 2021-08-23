import React,{useState} from 'react'
import {View} from 'react-native'
import {styles} from './styles'

//componets imports
import {Profile} from '../../components/Profile'
import {ButtonAdd} from '../../components/ButtonAdd'
import {CategoryList} from '../../components/CategoryList'


export function Home(){
    const [category,setCategory] = useState('');

    function handleCategorySelected(categoryId){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return(
        <View>
            <View  style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>
            <CategoryList 
                categorySelected={category}
                setCategory={handleCategorySelected}
            />
        </View>
        
    )
}