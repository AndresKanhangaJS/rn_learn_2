import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/home';
import HomeStack from './routes/homeStack';

// Mantenha a tela de splash visível enquanto as fontes são carregadas
SplashScreen.preventAutoHideAsync();

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await getFonts();
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Retorna nulo até que as fontes estejam carregadas
  }

  return <HomeStack />;
}
