import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import ResturantInfoCard from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  /* margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px; */
  ${StatusBar.currentHeight && `margin-top : ${StatusBar.currentHeight}px`}
`
const SearchContainer = styled.View`
  padding: ${(props)=>props.theme.space[3]};
`
const ResturantListContainer = styled.View`
  padding: ${(props)=>props.theme.space[3]};
  flex: 1;
`
 
export default function ResturantsScreen() {
  return (
    <SafeArea>
     <SearchContainer>
      <Searchbar />
     </SearchContainer>
     <ResturantListContainer>
      <ResturantInfoCard />
     </ResturantListContainer>  
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
