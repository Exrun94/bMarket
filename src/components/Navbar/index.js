import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { Dropdown, DropdownMenu, DropdownDivider } from 'styled-dropdown-component';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavAvatar, DropdownMenuItem, DropdownMenuLink } from './Navbar.elements'
import { ButtonNormal } from '../Button.element'
import { useAuth } from '../../contexts/AuthContext'

const Navbar = ({ toggle }) => {

    const { currentUser, logout } = useAuth();
    const [scrollNav, setScrollNav] = useState(false)
    const [hidden, setHidden] = useState(true);

    console.log(currentUser)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value={{ color: 'white' }}>
            <Nav scrollNav={scrollNav}>  
                <NavbarContainer> 
                    <NavLogo to="/" onClick={toggleHome}>bMarket</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                             >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="market"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                             >Market</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Services</NavLinks>
                        </NavItem>
                        {!currentUser && <NavItem>
                            <NavLinks to="signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Sign Up</NavLinks>
                        </NavItem> }
                    </NavMenu>
                    <NavBtn>
                        {!currentUser && <NavBtnLink to="signin">Sign In</NavBtnLink> }
                    </NavBtn>
                    {currentUser &&
                    <Dropdown>
                        <NavBtn dropdownToggle onClick={() => setHidden(!hidden)}>
                            <ButtonNormal primary={true} fontBig={true}>
                                Account   <NavAvatar /> 
                            </ButtonNormal>
                            <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
                            <DropdownMenuItem>Balance: </DropdownMenuItem>
                            <DropdownDivider />
                            <DropdownMenuItem><DropdownMenuLink to="marketplace">Visit Market</DropdownMenuLink></DropdownMenuItem>
                            <DropdownMenuItem><DropdownMenuLink to="my-wallet">My Wallet</DropdownMenuLink></DropdownMenuItem>
                            <DropdownMenuItem><DropdownMenuLink to="update-profile">Update Profile</DropdownMenuLink></DropdownMenuItem>
                            <DropdownDivider />
                            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                        </DropdownMenu>
                        </NavBtn>
                    </Dropdown>
                    }
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
