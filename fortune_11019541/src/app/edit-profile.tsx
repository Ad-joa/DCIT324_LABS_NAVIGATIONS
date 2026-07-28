import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useProfile } from '../context/ProfileContext';

export default function EditProfileScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { profile, updateProfile } = useProfile();

  // Initialize state from params if passed, otherwise fall back to context profile
  const [name, setName] = useState((params.name as string) || profile.name);
  const [programme, setProgramme] = useState((params.programme as string) || profile.programme);
  const [bio, setBio] = useState((params.bio as string) || profile.bio);

  useEffect(() => {
    if (params.name) setName(params.name as string);
    if (params.programme) setProgramme(params.programme as string);
    if (params.bio) setBio(params.bio as string);
  }, [params]);

  const handleSave = () => {
    updateProfile({ name, programme, bio });
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Edit Profile</Text>

        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>Programme:</Text>
        <TextInput
          style={styles.input}
          value={programme}
          onChangeText={setProgramme}
          placeholder="Enter your programme"
        />

        <Text style={styles.label}>Bio:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={bio}
          onChangeText={setBio}
          placeholder="Enter a short bio"
          multiline
        />

        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={handleSave} color="#002060" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#002060',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 10,
  },
});
