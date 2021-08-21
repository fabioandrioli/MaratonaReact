import React from 'react';
import {ScrollView} from 'react-native';
import { styles } from './styles';

export function Category(){
  return(
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{padding:40}}
    >
      
    </ScrollView>
  );
}