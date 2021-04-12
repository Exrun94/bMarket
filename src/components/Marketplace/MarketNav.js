import React, { useState } from 'react'
import { Nav, NavContainer, NavLogo, NavAvatar, NavBtn, DropdownMenuItem, DropdownMenuLink, } from './MarketNav.elements'
import { Dropdown, DropdownMenu, DropdownDivider } from 'styled-dropdown-component';
import { ButtonNormal } from '../Button.element'
import { useAuth } from '../../contexts/AuthContext'

const MarketNav = () => {

    const { currentUser, logout, balance } = useAuth()
    const [hidden, setHidden] = useState(true);



    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">bMarket</NavLogo>

                {currentUser &&
                    <Dropdown>
                        <NavBtn dropdownToggle onClick={() => setHidden(!hidden)}>
                            <ButtonNormal primary={true ? 1 : 0} fontBig={true ? 1 : 0}>
                                Account   <NavAvatar /> 
                            </ButtonNormal>
                            <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
                            <DropdownMenuItem>Balance: ${balance?.[0]?.usd} </DropdownMenuItem>
                            <DropdownDivider />
                            <DropdownMenuItem><DropdownMenuLink to="/">Visit Dashboard</DropdownMenuLink></DropdownMenuItem>
                            <DropdownMenuItem><DropdownMenuLink to="my-wallet">My Wallet</DropdownMenuLink></DropdownMenuItem>
                            <DropdownMenuItem><DropdownMenuLink to="update-profile">Update Profile</DropdownMenuLink></DropdownMenuItem>
                            <DropdownDivider />
                            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                        </DropdownMenu>
                        </NavBtn>
                    </Dropdown>
                    }

            </NavContainer>
        </Nav>
    )
}

export default MarketNav
