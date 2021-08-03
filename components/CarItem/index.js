import React from 'react';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';
import Buttons from '../Buttons/Buttons';
import styles from './styles';

const index =()=>{

    return (
        <View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/AudiCarPics/AudiRS7.jpg')} style={styles.image}  />
      <View style={styles.titles}>
      <Text style={styles.title}>Audi RS7</Text>
      <Text style={styles.subtitle}>Starting at 77,000$</Text>
      </View>

      <Buttons />
      </View>
    );
}

export default index;