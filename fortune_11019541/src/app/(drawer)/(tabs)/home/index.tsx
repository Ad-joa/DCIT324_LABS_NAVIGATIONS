import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const events = [
  {
    id: '1',
    title: 'Annual Technology Summit 2026',
    date: 'August 10, 2026',
    description: 'Join industry leaders and students at the Cedi Conference Centre for discussions on AI, Cloud Computing, and the future of tech in Ghana.',
  },
  {
    id: '2',
    title: 'Career & Internship Fair',
    date: 'August 15, 2026',
    description: 'Over 50 top companies will be at the Athletics Oval scouting for interns and full-time software engineers.',
  },
  {
    id: '3',
    title: 'Hackathon: Solution for Campus Mobility',
    date: 'August 20, 2026',
    description: 'A 48-hour coding marathon organized by the Computer Science Department to solve campus transportation challenges.',
  },
  {
    id: '4',
    title: 'Fresher Orientation Week',
    date: 'September 1, 2026',
    description: 'Welcome ceremonies and guided campus tours for incoming Level 100 students across all residence halls.',
  },
  {
    id: '5',
    title: 'Inter-Departmental Debate Championship',
    date: 'September 5, 2026',
    description: 'Watch the Computer Science debate team take on the Law faculty at the Great Hall auditoriums.',
  },
];

export default function FeedScreen() {
  const router = useRouter();

  const handlePress = (item: typeof events[0]) => {
    router.push({
      pathname: '/home/[id]',
      params: {
        id: item.id,
        title: item.title,
        date: item.date,
        description: item.description,
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Campus Events Feed</Text>
      <Text style={styles.subheader}>Tap an event to view details</Text>
      
      {events.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card} onPress={() => handlePress(item)}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.readMore}>Tap to view details →</Text>
        </TouchableOpacity>
      ))}
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
    color: '#002060',
  },
  subheader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#fbfcfd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 13,
    color: '#888',
    marginVertical: 4,
  },
  readMore: {
    fontSize: 14,
    color: '#002060',
    fontWeight: '600',
    marginTop: 6,
  },
});
