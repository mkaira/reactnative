import React from 'react';
import { View, Image, FlatList, Text, StyleSheet, Alert, Button } from 'react-native';


interface Profile  {
  id: string;
  name: string;
  role: string;
  avatar: string;
};
const profiles: Profile[] = [
  { id: '1', name: 'John Doe', role: 'Developer', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', name: 'Jane Smith', role: 'Designer', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '3', name: 'Alex Brown', role: 'Manager', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: '4', name: 'John Doe', role: 'Developer', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '5', name: 'Jane Smith', role: 'Designer', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '6', name: 'Alex Brown', role: 'Manager', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: '7', name: 'John Doe', role: 'Developer', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '8', name: 'Jane Smith', role: 'Designer', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '9', name: 'Alex Brown', role: 'Manager', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  
  { id: '10', name: 'John Doe', role: 'Developer', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '20', name: 'Jane Smith', role: 'Designer', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '30', name: 'Alex Brown', role: 'Manager', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  
];
const FlatListScreen = () => {
  return (
    <FlatList
      data={profiles}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: { padding: 10 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3
  },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
  name: { fontSize: 18, fontWeight: 'bold' },
  role: { color: 'gray' }
});

export default FlatListScreen;
