import React,{useState} from 'react'
import {View, FlatList,Text} from 'react-native'
import {styles} from './styles'

//componets imports
import {Profile} from '../../components/Profile'
import {ButtonAdd} from '../../components/ButtonAdd'
import {CategoryList} from '../../components/CategoryList'
import {ListHeader} from '../../components/ListHeader'
import {Apointment} from '../../components/Apointment'
import {ListDivider} from '../../components/ListDivider'


export function Home(){
    const [category,setCategory] = useState('');

    const appointments = [
        {
            id:"1",
            guild:{
                id:"1",
                name:"Lendários",
                icon:null,
                owner:true,
            },
            category:"1",
            date:"22/06 às 20:40",
            description:"E hoje vamos chegar ao chellenger sem perder uma partida da M10",
        
        },
        {
            id:"2",
            guild:{
                id:"1",
                name:"Lendários",
                icon:null,
                owner:true,
            },
            category:"1",
            date:"22/06 às 20:40",
            description:"E hoje vamos chegar ao chellenger sem perder uma partida da M10",
        
        }
    ]

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
            <View style={styles.content}>
                <ListHeader
                title="Partidas agendadas"
                subtitle="Total 6"
                />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    style={styles.matches}
                    ItemSeparatorComponent={() => <ListDivider/>}
                    renderItem={({item}) =>  (
                        <Apointment data={item}/>
                    )}
                />
            </View>
        </View>
        
    )
}