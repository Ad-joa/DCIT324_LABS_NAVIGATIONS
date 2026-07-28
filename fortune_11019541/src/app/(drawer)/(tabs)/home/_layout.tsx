import { Stack } from 'expo-router';
import React from 'react';

export default function HomeStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#002060' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Campus Feed',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Event Details',
        }}
      />
    </Stack>
  );
}
