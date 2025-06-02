import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import ResturantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { SafeArea } from './src/components/utility/safe-area.component';

import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
// step 1 : npm install -g expo-cli
// step 2 : npx expo install expo-font
// step 3 : expo install @expo-google-fonts/oswald
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
// step 3 : expo install @expo-google-fonts/lato
import { useFonts as useLato , Lato_400Regular } from '@expo-google-fonts/lato';
import { Text } from 'react-native';
import { RestaurantsContextProvider } from './src/services/restaurants/mock/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { Navigation } from './src/infrastructure/navigation';
import { useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: "AIzaSyCAd7y2NVCe9dKG26KL2nSRRET5GumS0Tc",
  authDomain: "meals-to-go-a5bc3.firebaseapp.com",
  projectId: "meals-to-go-a5bc3",
  storageBucket: "meals-to-go-a5bc3.firebasestorage.app",
  messagingSenderId: "416708310946",
  appId: "1:416708310946:web:5b7cf2938f6bca59ebe4fb",
  measurementId: "G-GVS8VRC158"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    signInWithEmailAndPassword(auth, "rahulprasad13@gmail.com", "rahul123")
    .then((user) => {
      setIsAuthenticated(true);
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);


  const [oswaldLoaded] = useOswald({ 
    Oswald_400Regular
  })

  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if(!oswaldLoaded || !latoLoaded){
    return null 
  }

  if(!isAuthenticated) return null

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <ResturantsScreen /> */}
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );   
} 

