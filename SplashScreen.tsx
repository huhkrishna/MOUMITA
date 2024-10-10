import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';

const { width, height } = Dimensions.get('window');

const SplashScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<Video>(null); // Reference to the video component

  useEffect(() => {
    // Fallback timer in case the video doesn't end
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 5000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = (status: AVPlaybackStatus) => {
    if (status.isLoaded && status.didJustFinish) {
      setIsLoaded(true); // Proceed after video finishes
    }
  };

  if (isLoaded) {
    return <>{children}</>; // Render the home screen after splash
  }

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require('../../assets/LOADING.mp4')} // Correct file path for the video
        style={styles.video}
        resizeMode={ResizeMode.COVER} // Make sure the video covers the screen
        shouldPlay // This ensures the video starts playing automatically
        onPlaybackStatusUpdate={handleVideoEnd} // Handle video end event
        isLooping={false} // Disable looping
        volume={1.0} // Ensure volume is up
        isMuted={false} // Unmute the video
        useNativeControls={false} // No controls
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Background color while loading
  },
  video: {
    width: width, // Full screen width
    height: height, // Full screen height
  },
});

export default SplashScreenWrapper;
