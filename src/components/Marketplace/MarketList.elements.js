import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MarketContainer = styled.div`
`;

export const MarketWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px;
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