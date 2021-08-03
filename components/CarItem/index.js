import React from 'react';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';
import Buttons from '../Buttons/Buttons';
import styles from './styles';

const index =(props)=>{

    return (
        <View style={styles.carContainer}>
        <ImageBackground source={props.image} style={styles.image}  />
      <View style={styles.titles}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>Starting at {props.price}$</Text>
      </View>

      <View style={styles.buttons}>
      <Buttons type="primary" buttonText="Custom Order" onPress={()=>{console.log("Custom order on press.")}} />
      <Buttons type="secondary" buttonText="Existing Inventory" onPress={()=>{console.log("Existing inventory on press.")}} />
      </View>
      </View>
    );
}

export default index;