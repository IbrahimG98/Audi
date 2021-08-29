import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Button,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import carsData from "./Cars";
import CarItem from "../CarItem/index";
import styles from "./styles";
import CarsDetailsList from "../CarsDetailsList/CarsDetailsList";
import { Swipeable } from "react-native-gesture-handler";

const CarsList = (props) => {
  let [showModal, setShowModal] = useState(false);
  let [categoryClicked, setCategoryClicked] = useState("");

  if (!showModal) {
    return (
      <View style={styles.container}>
        <FlatList
          data={carsData}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                setCategoryClicked(item.title);
                setShowModal(true);
              }}
            >
              <View>
                <CarItem car={item} />
              </View>
            </TouchableWithoutFeedback>
          )}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").height}
        />
      </View>
    );
  }
  if (showModal) {
    return (
        <View style={styles.modal}>
          <Button style={styles.button} onPress={()=>{setShowModal(false)}} title={'< Back'}></Button>
          <CarsDetailsList filter={categoryClicked} />
        </View>
    );
  }
};

export default CarsList;
