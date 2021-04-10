import React from 'react'
import { Nav, NavContainer, NavLogo, NavMenu, NavItem, NavElement, NavAvatar, NavDrowDown} from './MarketNav.elements'

const MarketNav = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">bMarket</NavLogo>

                <NavMenu>
                    <NavItem>
                        <NavElement>Wallet Balance: </NavElement>
                    </NavItem>
                    <NavItem>
                        <NavAvatar></NavAvatar>
                    </NavItem>

                </NavMenu>

            </NavContainer>
        </Nav>
    )
}

export default MarketNav
