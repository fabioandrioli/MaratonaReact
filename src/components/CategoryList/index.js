import React from 'react';
import {ScrollView} from 'react-native';
import { styles } from './styles';



import { categoriesItems } from '../../utils/categoriesItems';
import {Category} from '../Category'
export function CategoryList({categorySelected}){
  return(
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{padding:40}}
    >
      {
        categoriesItems.map(category => {
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
          /> 
        })
      }
    </ScrollView>
  );
}