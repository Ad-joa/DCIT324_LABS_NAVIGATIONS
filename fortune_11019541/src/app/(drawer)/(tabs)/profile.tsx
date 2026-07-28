import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useProfile } from '../../../context/ProfileContext';

export default function ProfileScreen() {
  const router = useRouter();
  const { profile } = useProfile();

  const handleEditPress = () => {
    router.push({
      pathname: '/edit-profile',
      params: {
        name: profile.name,
        programme: profile.programme,
        bio: profile.bio,
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Student Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{profile.name}</Text>

        <Text style={styles.label}>Index Number:</Text>
        <Text style={styles.value}>{profile.indexNumber}</Text>

        <Text style={styles.label}>Programme:</Text>
        <Text style={styles.value}>{profile.programme}</Text>

        <Text style={styles.label}>Level:</Text>
        <Text style={styles.value}>{profile.level}</Text>

        <Text style={styles.label}>Bio:</Text>
        <Text style={styles.value}>{profile.bio}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" onPress={handleEditPress} color="#002060" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#002060',
  },
  card: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  buttonContainer: {
    marginTop: 10,
  },
});
