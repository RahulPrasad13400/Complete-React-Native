import { Platform, SafeAreaView, StatusBar, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'
import ResturantInfoCard from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import { useContext } from 'react';
import { ActivityIndicator, color } from 'react-native-paper'

import { RestaurantsContext } from '../../../services/restaurants/mock/restaurants.context';

const isAndroid = Platform.OS === 'android'

import { SafeArea } from '../../../components/utility/safe-area.component';
import { Search } from '../components/search.component';
import { Spacer } from '../../../components/spacer/spacer.component';

// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   /* margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px; */
//   ${StatusBar.currentHeight && `margin-top : ${StatusBar.currentHeight}px`}
// `

const SearchContainer = styled.View`
  padding: ${(props)=>props.theme.space[3]};
`
// const ResturantListContainer = styled.View`
//   padding: ${(props)=>props.theme.space[3]};
//   flex: 1;
// `

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle : {
    padding: 16,
  }
})``

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`
 
export default function ResturantsScreen({ navigation }) {

  const {restaurants, isLoading } = useContext(RestaurantsContext)
  
  return (
    <SafeArea>
      { isLoading && (
        <LoadingContainer>
          <ActivityIndicator size={50}
            style={{marginLeft : -25}}
            animating={true}
            color='blue'/>
        </LoadingContainer>
      )}
      
      <Search />
     {/* <ResturantListContainer>
      <ResturantInfoCard />
     </ResturantListContainer> */}  

      {/* <FlatList data={[{name : 1}, {name : 2}]} 
        renderItem={()=> <ResturantInfoCard /> } 
        keyExtractor={(item)=>item.name}
        contentContainerStyle={{padding : 16}}
      /> */}

      <ResturantList data={restaurants} 
        renderItem={({item})=> (
          <TouchableOpacity onPress={()=>navigation.navigate("RestaurantDetail")}>
          <Spacer>
            <ResturantInfoCard restaurant={item} />
          </Spacer>
          </TouchableOpacity>
        )} 
        keyExtractor={(item)=>item.name}
        // contentContainerStyle={{padding : 16}}
      />
    </SafeArea>
  )
}

//  INITIAL STAGES OF PROJECT WE USED STYLESHEET TO STYLE THE COMPONENTS  

// const styles = StyleSheet.create({
//   container: {
//     flex : 1, 
//     marginTop : isAndroid ? StatusBar.currentHeight : 0
//   },
//   search : {
//     padding : 16
//   },
//   list : {
//     padding : 16, 
//     flex : 1
//   }
// });
