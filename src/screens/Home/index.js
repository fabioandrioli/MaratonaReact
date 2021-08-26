import React,{useState} from 'react'
import {View, FlatList,Text} from 'react-native'
import { useNavigation} from '@react-navigation/native';

//styles imports
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
    const navigation = useNavigation();
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
        
        },
        {
            id:"3",
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
            id:"4",
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
            id:"5",
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
            id:"6",
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

    function handleApointmentDetails(){
        navigation.navigate("ApointmentDetails")
    }

    function handleApointmentCreate(){
        navigation.navigate("ApointmentCreate")
    }

    return(
        <View style={styles.container}>
            <View  style={styles.header}>
                <Profile/>
                <ButtonAdd onPress={handleApointmentCreate}/>
            </View>
            <CategoryList 
                categorySelected={category}
                setCategory={handleCategorySelected}
            />
           
            <ListHeader
            title="Partidas agendadas"
            subtitle="Total 6"
            />

            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={true}
                style={styles.matches}
                contentContainerStyle={{paddingBottom:69}}
                ItemSeparatorComponent={() => <ListDivider/>}
                onEndReachedThreshold={0.5}
                renderItem={({item}) =>  (
                    <Apointment 
                        data={item}
                        onPress={handleApointmentDetails}
                    />
                )}
            />
         
        </View>
        
    )
}