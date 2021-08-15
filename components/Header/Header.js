import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/AudiCarPics/LogoDarkAudi.png")}
      />
    </View>
  );
};
export default Header;
