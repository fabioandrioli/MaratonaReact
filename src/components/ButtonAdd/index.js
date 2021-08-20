import {RectButton} from 'react-native-gesture-handler';
import React from 'react';
import { MaterialCommunityIcons} from '@expo/vector-icons'


import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function ButtonAdd({title,...rest}){
  return(
    <RectButton
      style={styles.container} 
      {...rest}
    >
        < MaterialCommunityIcons
            name="plus"
            color={theme.colors.heading}
            size={24}
        />
    </RectButton>
  );
}