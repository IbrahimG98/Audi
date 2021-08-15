import React from 'react';
import { View,Text, FlatList} from 'react-native';
import carsData from "./Cars";
import CarItem from "../CarItem/index";
import styles from "./styles";

const CarsList =(props)=>{
    return (
        <View style={styles.container}>
            <FlatList data={carsData} renderItem={({item})=><CarItem car={item} />} />
        </View>
    )
};

export default CarsList;
