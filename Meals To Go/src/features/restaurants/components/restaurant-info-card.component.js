import { Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { Address, Icon, Open, Rating, ResturantCard, ResturantCardCover, Section, SectionEnd } from "./resturant-info-card.styles";


export default function ResturantInfoCard({resturant = {}}) {
  const { name = 'Some Resturant', 
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", 
    photos = ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"], 
    address = "100 some random street", 
    isOpenNow = true, 
    rating = 4, 
    isClosedTemporarily = true
   } = resturant

   const ratingArray = Array.from(new Array(Math.floor(rating)))
     
  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{uri : photos[0]}} />
      <Card.Content>
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_,index)=>(
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text variant='error'>CLOSED TEMPORARILY</Text>}
            {/* <View style={{paddingLeft : 16}} /> */} {/* IT IS A TRICK TO GIVE SPACE BETWEEN ELEMENTS */}
            <Spacer position='left' size='large'>
              {isOpenNow && <Open xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position='left' size='large'> 
            <Icon source={{uri : icon}} />
            </Spacer>
            {/* <View style={{paddingLeft : 16}} /> */} {/* IT IS A TRICK TO GIVE SPACE BETWEEN ELEMENTS */}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Card.Content>
    </ResturantCard>
  )
}

// const styles = StyleSheet.create({
//   card : {backgroundColor : "white"},
//   cover : {padding : 20, backgroundColor : "white"}
// })