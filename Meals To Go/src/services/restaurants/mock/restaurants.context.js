import React, { useState, createContext, useEffect, useContext } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";
import { LocationContext } from "../../location/location.context";

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({children}) => {

    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const { location } = useContext(LocationContext)

    useEffect(()=>{
        if(location){
            console.log(location)
            const locationString = `${location.lat},${location.lng}`
            retrieveRestaurants(locationString)
        }
    },[location])

    const retrieveRestaurants = (location) => {
        setIsLoading(true)
        setRestaurants([])
        setTimeout(()=>{
            restaurantsRequest(location).then(restaurantsTransform).then((restaurants)=>{
                setIsLoading(false)
                setRestaurants(restaurants)
            }).catch((error)=>{
                setIsLoading(false)
                setError(error)
            })
        }, 2000)
    }

    return (
        <RestaurantsContext.Provider value={{
            restaurants,
            isLoading, error
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}

