import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MarketContainer = styled.div`
    background: #f9f9f9;

`;

export const MarketWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 80px;
    background: #fff;
`;

export const Table = styled.table`
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    padding: 0rem 2rem;
    border-collapse: collapse;
`;

export const THEAD = styled.thead`
    border-bottom: 2px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    height: 4em;
`;

export const TBODY = styled.tbody`

`;

export const TR = styled.tr`
    height: 3em;
    border-bottom: 1px solid #e0e0e0;
`;

export const TD = styled.td`

    &.rank {
        font-size: 0.7rem;
        margin-right: 10px;
        width: 1em;
    }

    &.symbol {
        margin: 50px;
    }

    &.font {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
    }

    &.change {
        color: ${({color}) => (color ? '#16c784' : '#ea3943')};
    }

    &.volume {
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    &.cap {
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    &.buy {
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    &.rank {
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`;

export const Img = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
`;

export const SPAN = styled.span`
    color: #C0C0C0;
    font-style: italic;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
`;

export const Details = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        color: var(--primary)
    }
`;

export const BuyBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px 0 10px;
    background: #e0e0e0;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    font-size: 0.8em;

    &:hover {
        background-color: var(--primary);
        transition: all 0.2s ease-in-out;
    }
`;