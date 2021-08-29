import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions, Modal, Button } from "react-native";
import CarDetails from "../CarDetails/CarDetails";
import styles from "./styles";
import carsData from "./CarsData";

const CarsDetailsList = (props) => {
  let [filteredArray, setFilteredArray] = useState();
  let [nullcheck,setNullCheck]=useState(false);
  useEffect(() => {
    let copyArray = [];
    carsData.forEach((item) => {
      if (item.title === props.filter) copyArray.push(item);
    });
    setFilteredArray(copyArray);
  }, []);
  console.log("new arr", filteredArray);
  return (
    <View>
      <FlatList
        data={filteredArray}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <CarDetails car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};
export default CarsDetailsList;
