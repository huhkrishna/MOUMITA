// app/(tabs)/login.tsx
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../assets/1.png')} // Replace with the correct path to your image
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* Overlay */}
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        {/* Form Fields */}
        <TextInput placeholder="Gmail ID or Mobile Number" style={styles.input} keyboardType="email-address" />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff', // Adjust color for visibility
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent input field
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
