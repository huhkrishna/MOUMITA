import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import SplashScreenWrapper from './SplashScreen'; // Import SplashScreenWrapper
const backgroundImage = require('../../assets/2.png');

export default function HomeScreen() {
  const router = useRouter();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load fonts and hide splash screen after loading
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync(); 
      await loadFonts();
      setFontsLoaded(true);
      await SplashScreen.hideAsync(); 
    }

    prepare();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Soulmeh': require('../../assets/fonts/Soulmeh.otf'), 
    });
  };

  // Render nothing while fonts are loading
  if (!fontsLoaded) {
    return null;
  }

  // Wrap the HomeScreen inside the SplashScreenWrapper to show the splash screen first
  return (
    <SplashScreenWrapper>  
      <ImageBackground
        source={backgroundImage}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome To</Text>
          <Text style={styles.titleMou}>MOUMITA</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => router.push('/signup')}>
              <LinearGradient
                colors={['#ff2e44', '#ff9aa4']} 
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/login')}>
              <LinearGradient
                colors={['#ff9aa4', '#ff2e44']} 
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SplashScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    //fontFamily: 'apple-system', 
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    paddingBottom: 0,
    paddingTop: 350,
  },
  titleMou: {
    fontSize: 48, 
    color: '#fff',
    fontFamily: 'Soulmeh', 
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    paddingBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', 
    paddingBottom: 20, 
  },
  button: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 10, 
    width: 250, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});
