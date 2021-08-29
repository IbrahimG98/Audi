import React from "react";
import { Text, View,Image } from "react-native";
import styles from "./styles";

const CarDetails =(props)=>{
    const {image,title,price,description}=props.car;
    return (
        <View style={styles.parentDiv}>
            <View style={styles.photocontainer}>
                <Image style={styles.image} source={image} />
            </View>
            <View style={styles.textcontainer}>
            <Text style={styles.title}>Model Name</Text>
            <Text style={styles.subtitle}>{title}</Text>
            <Text style={styles.title}>Price</Text>
            <Text style={styles.subtitle}>{price} $</Text>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.subtitle}>{description}
            </Text>
            </View>
        </View>
    )
};

export default CarDetails;