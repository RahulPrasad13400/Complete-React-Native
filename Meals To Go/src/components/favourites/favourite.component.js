import { useContext } from "react"
import { FavouritesContext } from "../../services/favourites/favourites.context"
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 9;
`

export const Favourite = ({restaurant}) => {

    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext)

    const isFavourite = favourites.find((res)=>res.placeId === restaurant.placeId)

    return <FavouriteButton onPress={()=> isFavourite ? removeFromFavourites(restaurant) : addToFavourites(restaurant)}>
            <AntDesign name={isFavourite ? "heart" : "hearto"} 
                size={24} 
                color={isFavourite ? "red" : "white"}
            />
        </FavouriteButton>
}