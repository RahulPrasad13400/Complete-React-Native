import { View, Text } from "react-native"
import { AccountBackground, AccountContainer, AccountCover, AuthButton } from "../components/account.styles"

// by giving the AccountCover inside the AccountBackground we can lighten up the background image(AccountBackground)
export const AccountScreen = () => {
    return <AccountBackground>
        <AccountCover /> 
        <AccountContainer>
            <AuthButton title='login' />
        </AccountContainer>
    </AccountBackground>
}