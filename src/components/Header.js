import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header() {


    return (
        <HeaderContainer>

            <HeaderLeft>
                
            </HeaderLeft>


            <HeaderRight>
                <HelpOutlineIcon />
                <HeaderAvatar />
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header


const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--tone-color-3);
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }

    > .MuiSvgIcon-root:hover {
        opacity: 0.8;
        color: white;
        
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    margin-right: 20px;

    :hover {
        opacity: 0.8;
    }
`;

