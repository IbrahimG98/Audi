import { Dimensions } from "react-native";

const styles = {
  parentDiv: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#4C5480",
    height:Dimensions.get('window').height,
    width:'100%',
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  photocontainer: {
    order: 1,
    width: "100%",
    height: "50%",
  },
  textcontainer: {
    order: 2,
    width: "100%",
    height: "50%",
    textAlign: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    color:"#C7CBE5"
  },
  subtitle: {
    fontSize: 17,
    color:"#B1B3BE"
  },
};

export default styles;
