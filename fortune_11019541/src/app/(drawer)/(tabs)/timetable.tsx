import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const timetable = [
  { day: 'Monday', time: '07:30 AM - 09:30 AM', course: 'DCIT 324', venue: 'NNB 2' },
  { day: 'Tuesday', time: '09:30 AM - 11:30 AM', course: 'DCIT 302', venue: 'JQB 19' },
  { day: 'Wednesday', time: '11:30 AM - 01:30 PM', course: 'DCIT 304', venue: 'Computer Science Dept Lab 1' },
  { day: 'Thursday', time: '01:30 PM - 03:30 PM', course: 'DCIT 308', venue: 'JQB 23' },
  { day: 'Friday', time: '03:30 PM - 05:30 PM', course: 'DCIT 312', venue: 'NNB 3' },
];

export default function TimetableScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Weekly Class Timetable</Text>
      {timetable.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.dayTime}>{item.day} | {item.time}</Text>
          <Text style={styles.course}>{item.course}</Text>
          <Text style={styles.venue}>Venue: {item.venue}</Text>
        </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#002060',
  },
  card: {
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#002060',
    backgroundColor: '#f8f9fa',
    marginBottom: 12,
    borderRadius: 4,
  },
  dayTime: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  course: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002060',
    marginVertical: 4,
  },
  venue: {
    fontSize: 15,
    color: '#333',
  },
});
