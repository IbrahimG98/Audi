import { Dimensions } from "react-native";

const styles={
    carContainer:
    {
      height:Dimensions.get('window').height,
      width:'100%'
    },
    image:{
      width:'100%',
      height:'100%',
      position:'absolute',
      resizeMode:'cover'
    },
    titles:
    {
      marginTop:'30%',
      width:'100%',
      alignItems:'center'
    },
    buttons:{
     position:'absolute',
     width:'100%',
     bottom:50
    },
    title:{
      fontSize:35,
      fontWeight:'600'
    },
    subtitle:{
      fontSize:17,
      color:"white"
    }
}

export default styles;