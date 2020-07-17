import React from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import SearchScreen from './mySrc/screens/Search';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <SearchScreen />
    </>
  );
};
const styles = StyleSheet.create({});

export default App;
