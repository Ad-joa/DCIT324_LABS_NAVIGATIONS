import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Campus Connect</Text>
      <Text style={styles.description}>
        A campus navigation companion app built to demonstrate React Navigation and Expo Router architecture.
      </Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.label}>Developer Name:</Text>
        <Text style={styles.value}>Fortune Diapim Akpene</Text>
        
        <Text style={styles.label}>Student ID:</Text>
        <Text style={styles.value}>11019541</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  appName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#002060',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 30,
  },
  infoBox: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
