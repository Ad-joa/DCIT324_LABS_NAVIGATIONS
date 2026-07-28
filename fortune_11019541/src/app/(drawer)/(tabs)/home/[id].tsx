import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function EventDetailsScreen() {
  const router = useRouter();
  const { title, date, description } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title || 'Event Title'}</Text>
        <Text style={styles.date}>{date || 'Date not specified'}</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          {description || 'No additional description available for this event.'}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="← Back to Feed" onPress={() => router.back()} color="#002060" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002060',
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 12,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  buttonContainer: {
    marginTop: 5,
  },
});
