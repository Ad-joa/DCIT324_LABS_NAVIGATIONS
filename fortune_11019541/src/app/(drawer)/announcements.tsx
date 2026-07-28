import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const announcements = [
  { id: 1, title: 'End of Semester Exams Timetable', date: 'July 25, 2026', text: 'The draft timetable for the second semester examinations has been released. Check notice boards.' },
  { id: 2, title: 'SRC General Meeting', date: 'July 22, 2026', text: 'All students are invited to attend the SRC general meeting at the Great Hall this Friday at 4:00 PM.' },
  { id: 3, title: 'Library Extended Hours', date: 'July 20, 2026', text: 'Balme Library will now be open 24/7 starting next week to support exam preparations.' },
  { id: 4, title: 'Campus Wi-Fi Maintenance', date: 'July 18, 2026', text: 'UG-WiFi will experience brief intermittent downtime on Saturday between 12:00 AM and 4:00 AM.' },
  { id: 5, title: 'Inter-Hall Sports Competition', date: 'July 15, 2026', text: 'Registration for the annual athletics meet is now open at the sports directorate.' },
];

export default function AnnouncementsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Campus Announcements</Text>
      {announcements.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.text}>{item.text}</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#002060',
  },
  card: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginVertical: 4,
  },
  text: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
