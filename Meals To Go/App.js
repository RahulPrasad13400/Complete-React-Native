import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import ResturantsScreen from './src/features/restaurants/screens/restaurants.screen';

import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

// step 1 : npm install -g expo-cli
// step 2 : npx expo install expo-font
// step 3 : expo install @expo-google-fonts/oswald
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
// step 3 : expo install @expo-google-fonts/lato
import { useFonts as useLato , Lato_400Regular } from '@expo-google-fonts/lato';

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
        <ResturantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );   
} 


