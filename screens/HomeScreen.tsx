import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserDetails from '../components/UserDetails';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <UserDetails name="John Doe" email="john.doe@example.com" age={30} />
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

export default HomeScreen;
