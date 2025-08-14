import React from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import UserDetails from '../components/UserDetails';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the About Us Screen!</Text>
     

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AboutUsScreen;
