import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';
import Cars from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <Cars image={require('./assets/AudiCarPics/AudiRS7.jpg')} title={"Audi A7"} price={"70,000"} />

      <StatusBar style="auto" />
    </View>
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
