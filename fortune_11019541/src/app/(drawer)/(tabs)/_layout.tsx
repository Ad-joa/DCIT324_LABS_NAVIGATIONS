import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#002060',
        tabBarInactiveTintColor: '#888',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          paddingBottom: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: 'Courses',
          tabBarLabel: 'Courses',
          headerShown: true,
          headerStyle: { backgroundColor: '#002060' },
          headerTintColor: '#fff',
        }}
      />
      <Tabs.Screen
        name="timetable"
        options={{
          title: 'Timetable',
          tabBarLabel: 'Timetable',
          headerShown: true,
          headerStyle: { backgroundColor: '#002060' },
          headerTintColor: '#fff',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          headerShown: true,
          headerStyle: { backgroundColor: '#002060' },
          headerTintColor: '#fff',
        }}
      />
    </Tabs>
  );
}
