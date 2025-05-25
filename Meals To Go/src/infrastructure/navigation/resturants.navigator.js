import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { Text } from 'react-native'

import ResturantsScreen from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (                                                            
    <RestaurantStack.Navigator screenOptions={{ headerShown: false, // ...TransitionPresets.ModalPresentationIOS -- thazhe ne ponthi varuna effect kittan vendi ane 
      ...TransitionPresets.ModalPresentationIOS }} > 
      <RestaurantStack.Screen
        name="Restaurants"
        component={ResturantsScreen} // IT PASSES A PROP navigation TO THE ResturantsScreen
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={()=><Text>Restaurant Detail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};