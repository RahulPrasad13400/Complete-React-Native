import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext()

export const LocationContextProvider = ({children}) => {

    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ location, setLocation ] = useState([])
    const [ keyword, setKeyword ] = useState('')

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        setKeyword(searchKeyword)
    }

    useEffect(()=>{
        if(!keyword?.length){
            return 
        }
        locationRequest(keyword.toLowerCase()).then(locationTransform)
        .then((result)=>{
            setIsLoading(false)
            setLocation(result)
        }).catch((error)=>{
            setIsLoading(false)
            setError(error)
        })
    },[keyword])
 
    return <LocationContext.Provider value={{isLoading, 
        error, 
        location, 
        search : onSearch,
        keyword
    }}>
        {children}
    </LocationContext.Provider>
}