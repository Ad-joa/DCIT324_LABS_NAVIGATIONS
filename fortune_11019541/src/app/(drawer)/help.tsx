import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const faqs = [
  {
    q: 'How do I register for courses on Campus Connect?',
    a: 'Navigate to the Courses tab on your Dashboard to view enrolled courses, or visit the MIS web portal for official course registration.',
  },
  {
    q: 'How can I update my profile details?',
    a: 'Go to the Profile tab in the bottom navigation bar and tap on the "Edit Profile" button to change your bio, name, or programme.',
  },
  {
    q: 'Where do I find my class timetable?',
    a: 'Your class venues and schedules can be viewed under the Timetable tab on the main Dashboard.',
  },
  {
    q: 'Who should I contact for technical support?',
    a: 'Please reach out to the University of Ghana Computing Systems (UGCS) helpdesk at ugcs@ug.edu.gh.',
  },
];

export default function HelpScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Help & Support FAQ</Text>
      {faqs.map((faq, idx) => (
        <View key={idx} style={styles.faqItem}>
          <Text style={styles.question}>Q: {faq.q}</Text>
          <Text style={styles.answer}>A: {faq.a}</Text>
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
    marginBottom: 20,
    color: '#002060',
  },
  faqItem: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
