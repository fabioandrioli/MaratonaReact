import React from 'react';
import {ScrollView} from 'react-native';
import { styles } from './styles';

import { categoriesItems } from '../../utils/categoriesItems';
import {Category} from '../Category'
export function CategoryList({categorySelected = false}){
  return(
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{padding:40}}
    >
      {
        categoriesItems.map(category => (
           <Category
            key={category.id}
            title={category.title}
            Icon={category.icon}
            
          /> 
        ))
      }
    </ScrollView>
  );
}