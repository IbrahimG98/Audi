import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Modal,
  Button,
} from "react-native";
import CarsDetailsList from "../CarsDetailsList/CarsDetailsList";
import Buttons from "../Buttons/Buttons";
import styles from "./styles";

const index = (props) => {
  const { image, title, price } = props.car;
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <View style={styles.parent}>
        <View style={styles.carContainer}>
          <ImageBackground source={image} style={styles.image} />
          <View style={styles.titles}>
            <Text
              style={styles.title}
              onPress={() => {
                setOpenDetails(false);
              }}
            >
              {title}
            </Text>
            <Text style={styles.subtitle}>Starting at {price}$</Text>
          </View>

          {/* <View style={styles.buttons}>
            <Buttons
              type="primary"
              buttonText="Custom Order"
              onPress={() => {
                console.log("Custom order on press.");
              }}
            />
            <Buttons
              type="secondary"
              buttonText="Existing Inventory"
              onPress={() => {
                setOpenDetails(true);
              }}
            />
          </View> */}
        </View>
    </View>
  );
};

export default index;
