import { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props)=>props.theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 40px;
`

export const Search = () => {
    
    const { keyword, search } = useContext(LocationContext) 
    const [searchKeyword, setSearchKeyword] = useState(keyword)  

    useEffect(()=>{
        setSearchKeyword(keyword)
    },[keyword])

    return <SearchContainer>
      <Searchbar placeholder="Search for a location" icon={'map'} value={searchKeyword} 
        onSubmitEditing={()=>{
          search(searchKeyword)
        }} onChangeText={(text)=>{
          setSearchKeyword(text)
        }}
      />
     </SearchContainer>
}