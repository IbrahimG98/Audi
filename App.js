import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';
import CarDetails from './components/CarDetails/CarDetails';
import CarsDetailsList from './components/CarsDetailsList/CarsDetailsList';
import CarsList from './components/CarsList/CarsList';
import Header from './components/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
    
      <CarsList />

      <StatusBar style="auto" />
    </View>
    //<CarsDetailsList filter={"Audi A6"} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
