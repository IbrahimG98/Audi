import React from 'react';
import { View,Text, FlatList, Dimensions} from 'react-native';
import carsData from "./Cars";
import CarItem from "../CarItem/index";
import styles from "./styles";

const CarsList =(props)=>{
    return (
        <View style={styles.container}>
            <FlatList data={carsData} renderItem={({item})=><CarItem car={item} />}
             snapToAlignment={'start'}
             decelerationRate={'fast'}
             snapToInterval={Dimensions.get('window').height} />
        </View>
    )
};

export default CarsList;
