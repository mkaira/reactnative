import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UserDetailsProps {
  name: string;
  email: string;
  age?: number;
}

const UserDetails: React.FC<UserDetailsProps> = ({ name, email, age }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name: <Text style={styles.value}>{name}</Text></Text>
      <Text style={styles.label}>Email: <Text style={styles.value}>{email}</Text></Text>
      {age !== undefined && (
        <Text style={styles.label}>Age: <Text style={styles.value}>{age}</Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  value: {
    fontWeight: 'normal',
    color: '#555',
  },
});

export default UserDetails;
