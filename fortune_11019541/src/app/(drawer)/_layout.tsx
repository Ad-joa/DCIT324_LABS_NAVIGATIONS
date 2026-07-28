import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: '#002060' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#002060',
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Dashboard',
          title: 'Campus Connect - Dashboard',
        }}
      />
      <Drawer.Screen
        name="announcements"
        options={{
          drawerLabel: 'Announcements',
          title: 'Announcements',
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: 'About',
          title: 'About App',
        }}
      />
      <Drawer.Screen
        name="help"
        options={{
          drawerLabel: 'Help & Support',
          title: 'Help & Support',
        }}
      />
    </Drawer>
  );
}
