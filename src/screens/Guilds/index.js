import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, FlatList,Text } from 'react-native';

import { Guild} from '../../components/Guild';
import { Load } from '../../components/Load';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';
// import { api } from '../../services/api';



export function Guilds({ handleGuildSelect }){
 // const [guilds, setGuilds] = useState([]);
  //const [loading, setLoading] = useState(true);

  const guilds = [
    {
      id:"1",
      name:"Lendários",
      icon:"Teste.png",
      owner:true,
    },
    {
      id:"2",
      name:"Picaretas",
      icon:"Teste.png",
      owner:false,
    },
    {
      id:"3",
      name:"Picaretas",
      icon:"Teste.png",
      owner:false,
    },
    {
      id:"4",
      name:"Picaretas",
      icon:"Teste.png",
      owner:false,
    },
    {
      id:"5",
      name:"Picaretas",
      icon:"Teste.png",
      owner:false,
    },
    {
      id:"6",
      name:"Picaretas",
      icon:"Teste.png",
      owner:false,
    },
    {
      id:"7",
      name:"Picaretas",
      icon:"Teste.png",
      owner:false,
    },
    {
      id:"8",
      name:"Picaretas",
      icon:"Teste.png",
      owner:false,
    },
  ]

  async function fetchGuilds(){
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    setLoading(false);
  }


  return (
    <View style={styles.container}>
      
      
        <FlatList 
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Guild 
              data={item}
              onPress={() => handleGuildSelect(item)}
            />
          )}    
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          ListHeaderComponent={() => <ListDivider isCentered />}
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
          style={styles.guilds}
        />
      
    </View>
  );
}