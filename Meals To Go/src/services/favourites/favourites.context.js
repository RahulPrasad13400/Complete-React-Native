import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({children}) => {
    
    const [favourites, setFavourites] = useState([])

    const saveFavourites = async (value) => {   // FAVOURITES INE SAVE CHEYYAN VENNDI (import AsyncStorage from "@react-native-async-storage/async-storage")
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@favourites', jsonValue)
        } catch (error) {
            console.log("Error Loading : ",error)
        }
    }

    const loadFavourites = async () => {    // FAVOURITES INE LOAD CHEYYAN VENNDI (import AsyncStorage from "@react-native-async-storage/async-storage")
        try {
            const value = await AsyncStorage.getItem("@favourites")
            if(value !== null){
                setFavourites(JSON.parse(value))
            }
        } catch (error) {
            console.log("Error Storing : ", error)
        }
    }

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }

    const remove = (restaurant) => {
        const newFavourites = favourites.filter((x)=>x.placeId !== restaurant.placeId)
        setFavourites(newFavourites)
    }

    useEffect(()=>{
        loadFavourites()
    },[])

    useEffect(()=>{
        saveFavourites(favourites)
    },[favourites])

    return <FavouritesContext.Provider value={{
        favourites, 
        addToFavourites : add,
        removeFromFavourites : remove
    }}>
        {children}
    </FavouritesContext.Provider>
}