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


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if(!oswaldLoaded || !latoLoaded){
    return null 
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <ResturantsScreen /> */}
        <FavouritesContextProvider>
          <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );   
} 


