import MapView, {Marker, Callout} from "react-native-maps";
import styled from "styled-components/native";
import { Text, View } from "react-native";

import { Search } from "../components/search.component";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`

const SomeText = styled(Text)``

export const MapScreen = ({navigation}) => {

    const { location } = useContext(LocationContext)
    const { restaurants = [] } = useContext(RestaurantsContext)

    const [latDelta, setLatDelta] = useState(0)

    const {lat, lng, viewport} = location

    useEffect(()=>{

        const northeastLat = viewport?.northeast?.lat
        const southwestLat = viewport?.southwest?.lat

        setLatDelta(northeastLat - southwestLat)

    },[location])

    return <>
     <Search />
     <Map region={{
        latitude : lat,
        longitude : lng,
        latitudeDelta : latDelta,
        longitudeDelta : 0.02
     }} >
        { restaurants.map((restaurant)=>{
            return <Marker key={restaurant.name} title={restaurant.name}
                coordinate={{
                    latitude : restaurant.geometry.location.lat,
                    longitude : restaurant.geometry.location.lng
                }} >
                <Callout onPress={()=>navigation.navigate("RestaurantDetail",{restaurant : restaurant})}>
                    <MapCallout restaurant={restaurant} /> 
                </Callout>
            </Marker>
        })}
     </Map>
    </>
}

