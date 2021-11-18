import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from './src/components/Content';
import Footer from './src/components/Footer';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      
    {/* <Header/> */}
    <Content/>
    {/* <Footer/> */}
    
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
