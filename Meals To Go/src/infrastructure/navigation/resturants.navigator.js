import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { Text } from 'react-native'

import ResturantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";

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
        component={RestaurantDetailScreen}  // RestaurantDetailScreen gets route as a props (hover over the element to see why)
      />
    </RestaurantStack.Navigator>
  );
};