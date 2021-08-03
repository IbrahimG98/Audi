import React from "react";
import { Text,Pressable, View } from "react-native";
import styles from './styles';


const Buttons =(props)=>{

    return (
        <View style={styles.container}>
            <Pressable style={styles.button}
           onPress={()=>{console.warn('button was clicked')}} >

            <Text style={styles.text}>Custom Order</Text>
           </Pressable>
        </View>

    );
};

export default Buttons;