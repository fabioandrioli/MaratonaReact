import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';

import { Background } from '../Background';



export function ModalView({
  children = ReactNode, 
  closeModal,
  ...rest
}){
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}