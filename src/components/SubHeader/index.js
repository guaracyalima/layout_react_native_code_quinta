import React from 'react';

import { View, Image, Text } from 'react-native';

import styles from './styles';
import Button from '../Button'
const SubHeader = () => (
  <View style={styles.container}>
    <Image 
        source={{uri: 'https://i.imgur.com/8deYuGN.gif'}}
        style={styles.avatar}/>

        <View style={styles.profileInfo}>
            <Text style={styles.name}>guabirabaDev</Text>
            <Text style={styles.bio}>Full stack developer</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button style={styles.firstButton}>Mensagem</Button>
          <Button type="outline">Seguir</Button>
        </View>
  </View>
);

export default SubHeader;
