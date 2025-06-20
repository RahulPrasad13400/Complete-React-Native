import styled from "styled-components";
import { colors } from '../../../infrastructure/theme/colors'

export const AccountBackground = styled.ImageBackground.attrs({
    source : require('../../../../assets/photo_2025-06-02_17-15-25.jpg'),
})`
    flex : 1;
    align-items : center;
    justify-content : center;
`

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
`

export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props)=>props.theme.space[4]};
    margin-top: ${(props)=>props.theme.space[2]};
`

// <Button color='' title='' /> -> ithupole color kodukan vendi ane (oru attribute pole ane ath color accept cheyunath)
export const AuthButton = styled.Button.attrs({
    color : colors.brand.primary
})`

`;