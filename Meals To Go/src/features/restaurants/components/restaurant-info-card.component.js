import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  font-family: ${(props)=>props.theme.fonts.body};
  /* font-family: Oswald_400Regular; */
  color: ${(props)=>props.theme.colors.ui.primary}; 
`
const ResturantCard = styled(Card)`
  background-color: white;
`
const ResturantCardCover = styled(Card.Cover)`
  padding: ${(props)=>props.theme.space[3]};
  background-color: white;
`

export default function ResturantInfoCard({resturant = {}}) {
  const { name = 'Some Resturant', 
    icon, 
    photos = ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"], 
    address = "100 some random street", 
    isOpenNow = true, 
    rating = 4, 
    isClosedTemporarily 
   } = resturant

  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{uri : photos[0]}} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </ResturantCard>
  )
}

// const styles = StyleSheet.create({
//   card : {backgroundColor : "white"},
//   cover : {padding : 20, backgroundColor : "white"}
// })