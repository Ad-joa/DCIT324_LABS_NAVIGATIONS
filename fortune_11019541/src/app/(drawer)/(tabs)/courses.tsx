import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const courses = [
  { code: 'DCIT 324', title: 'Mobile Application Development', credits: 3 },
  { code: 'DCIT 302', title: 'Human Computer Interaction', credits: 3 },
  { code: 'DCIT 304', title: 'Research Methods', credits: 3 },
  { code: 'DCIT 308', title: 'Data Structures and Algorithms II', credits: 3 },
  { code: 'DCIT 312', title: 'Information Security and Privacy', credits: 3 },
  { code: 'MATH 354', title: 'Discrete Mathematics', credits: 3 },
];

export default function CoursesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Enrolled Courses (Level 300)</Text>
      {courses.map((course, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.code}>{course.code}</Text>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.credits}>{course.credits} Credit Hours</Text>
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
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fcfcfc',
  },
  code: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002060',
  },
  title: {
    fontSize: 16,
    color: '#333',
    marginVertical: 4,
  },
  credits: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});
