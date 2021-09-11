import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/';
import Banco from './src/components/Banco';


export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Banco />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
