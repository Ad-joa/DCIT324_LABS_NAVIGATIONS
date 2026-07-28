import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ProfileProvider } from '../context/ProfileContext';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ProfileProvider>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: '#002060' }, // UG Blue
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="welcome" options={{ headerShown: false }} />
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen
            name="edit-profile"
            options={{
              title: 'Edit Profile',
              presentation: 'modal',
            }}
          />
        </Stack>
      </ProfileProvider>
    </GestureHandlerRootView>
  );
}
