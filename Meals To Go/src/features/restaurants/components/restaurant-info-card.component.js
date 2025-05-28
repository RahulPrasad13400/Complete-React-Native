import { Image, View } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { Address, Icon, Open, Rating, ResturantCard, ResturantCardCover, Section, SectionEnd } from "./resturant-info-card.styles";
import { Favourite } from "../../../components/favourites/favourite.component";


export default function ResturantInfoCard({restaurant}) {
  const { name, 
    icon, 
    photos, 
    address, 
    isOpenNow, 
    rating, 
    isClosedTemporarily
   } = restaurant

   const ratingArray = Array.from(new Array(Math.floor(rating)))
     
  return (
    <ResturantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <ResturantCardCover key={name} source={{uri : photos[0]}} />
      </View>
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
            <Spacer position='left' size='large'>
              {isOpenNow && <Open xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position='left' size='large'> 
            <Icon source={{uri : icon}} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Card.Content>
    </ResturantCard>
  )
}

{/* <View style={{paddingLeft : 16}} /> */} {/* IT IS A TRICK TO GIVE SPACE BETWEEN ELEMENTS */}

{/* <View style={{paddingLeft : 16}} /> */} {/* IT IS A TRICK TO GIVE SPACE BETWEEN ELEMENTS */}

// const styles = StyleSheet.create({
//   card : {backgroundColor : "white"},
//   cover : {padding : 20, backgroundColor : "white"}
// })