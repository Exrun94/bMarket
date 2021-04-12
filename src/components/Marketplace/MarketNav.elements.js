import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import { DropdownItem } from 'styled-dropdown-component'

export const Nav = styled.div`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.div`
    height: 80px;
    position: relative;
    display: inline-block;
`;


export const NavLink = styled(LinkR)`
    color: #fff;
    display: flex;
    position: relative;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavElement = styled.div`
    color: #c3c3c3;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 0.8rem;
`;

export const NavDrowDown = styled.div`
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    z-index: 1;
`;

export const DropdownMenuItem = styled(DropdownItem)`
    cursor: pointer;
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
        color: #01bf71;
    }
`;

export const DropdownMenuLink = styled(LinkR)`
    cursor: pointer;
    text-decoration: none;
    color: #000;
    
    &:hover {
        color: #01bf71;
    }
`;

export const NavAvatar = styled(FaUserCircle)`
    height: 100%;
    cursor: pointer;
    margin-left: 10px;

`;