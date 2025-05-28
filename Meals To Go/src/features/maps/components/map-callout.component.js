// import React from "react"
// import styled from "styled-components/native"
// import { Text } from "react-native"
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component"

// const MyText = styled(Text)`
//     background-color: red;
// `

export const MapCallout = ({restaurant}) => {
    return <CompactRestaurantInfo restaurant={restaurant} />
}