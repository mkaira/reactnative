import React from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import UserDetails from '../components/UserDetails';

const HomeScreen = ({ navigation }: any) => {

  const handleAboutus = () => {
    navigation.navigate('aboutus');
  };
  const handleFlatList = () => {
    navigation.navigate('FlatList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <UserDetails name="John Doe" email="john.doe@example.com" age={30} />

      <Button title="About Us" onPress={handleAboutus} />
      <Button title="Flat List" onPress={handleFlatList} />


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
  button: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

export default HomeScreen;
