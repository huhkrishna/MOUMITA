declare module 'react-native-animated-splash-screen' {
    import { ComponentType } from 'react';
    import { ImageSourcePropType } from 'react-native';
  
    interface AnimatedSplashProps {
      isLoaded: boolean;
      logoImage: ImageSourcePropType;
      backgroundColor?: string;
      logoWidth?: number;
      logoHeight?: number;
      children?: React.ReactNode;
      translucent?: boolean;
    }
  
    const AnimatedSplash: ComponentType<AnimatedSplashProps>;
    export default AnimatedSplash;
  }