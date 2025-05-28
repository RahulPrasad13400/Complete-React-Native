import ResturantInfoCard from '../components/restaurant-info-card.component'
import { SafeArea } from '../../../components/utility/safe-area.component' 
import { useState } from 'react'
import { List } from 'react-native-paper'
import { ScrollView } from 'react-native'

export default function RestaurantDetailScreen({ route }) {

  const { restaurant } = route.params

  const [breakfastExpanded, setBreakfastExpanded ] = useState(false)
  const [lunchExpanded, setLunchExpanded] = useState(false)
  const [dinnerExpanded, setDinnerExpanded] = useState(false)
  const [drinksExpanded, setDrinksExpanded] = useState(false)

  return (
    <SafeArea>
      <ResturantInfoCard restaurant={restaurant} />
      
      <ScrollView> 
      <List.Accordion title='Breakfast' left={(props)=> <List.Icon {...props} icon='bread-slice' />}
        expanded={breakfastExpanded} onPress={()=>setBreakfastExpanded(!breakfastExpanded)}>

      </List.Accordion>

      <List.Accordion title='Lunch' left={(props)=> <List.Icon {...props} icon='hamburger' />}
        expanded={lunchExpanded} onPress={()=>setLunchExpanded(!lunchExpanded)}>
          <List.Item title='Eggs Benedict' />
          <List.Item title='Classic Breakfast' />
      </List.Accordion>

      <List.Accordion title='Dinner' left={(props)=> <List.Icon {...props} icon='food-variant' />}
        expanded={dinnerExpanded} onPress={()=>setDinnerExpanded(!dinnerExpanded)}>
          <List.Item title='Burder & Fries' />
          <List.Item title='Steak Sandwich' />
          <List.Item title='Mushroom Soup' />
      </List.Accordion>  

      <List.Accordion title='Drinks' left={(props)=> <List.Icon {...props} icon='cup' />}
        expanded={drinksExpanded} onPress={()=>setDrinksExpanded(!drinksExpanded)}>
          <List.Item title='Coffee' />
          <List.Item title='Tea' />
          <List.Item title='Modelo' />
          <List.Item title='Coke' />
          <List.Item title='Fanta' />
      </List.Accordion>
      </ScrollView>
    </SafeArea>
  )
}
