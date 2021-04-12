import styled from 'styled-components'

export const Container = styled.div`
    height: 800px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding-top: 30px;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }

`;

export const MainWrapper = styled.div`
    display: flex;
    background-color: #fff;
    justify-content: center;
    align-items: flex-start;
`;

export const Wrapper = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 10px;
    max-height: 340px;
    min-width: 440px;
    padding: 30px;
    margin: 0 15px 0 15px;

`;

export const Img = styled.img`
    height: 160px;
    margin-left: 25px;
`;

export const Name = styled.h1`
    display: flex;
    align-self: flex-start;
    margin-left: 45px;
    margin-top: 15px;

`;

export const Price = styled.h3`
    font-size: 1.3em;
    margin-bottom: 10px;
`;

export const MarketCap = styled.h3`
    font-size: 1.1em;
    margin-bottom: 10px;
`;

export const Rank = styled.h6`
    display: flex;
    align-self: flex-start;
    margin-left: 45px;
    margin-top: 15px;
    font-size: 1.1em;
    color: #6e6e6e;
`;

export const Volume = styled.h3`
    font-size: 1.1em;
    margin-bottom: 10px;
`;

export const High24 = styled.h3`
    font-size: 0.9em;

`;

export const Low24 = styled.h3`
    font-size: 0.9em;

`;

export const PriceChange24 = styled.h3`
    font-size: 0.9em;
    color: ${({color}) => (color ? '#16c784' : '#ea3943')};

    > span {
        color: #000;
    }

`;

export const PriceChangePercentage24 = styled.h3`
    font-size: 0.9em;
    color: ${({color}) => (color ? '#16c784' : '#ea3943')};

    > span {
        color: #000;
    }
`;

export const CirculationSupply = styled.h3`
    font-size: 1.1em;
    margin-bottom: 10px;
`;

export const TotalSupply = styled.span`
    font-size: 1.1em;
    margin-bottom: 10px;
`;

export const Ath = styled.h6`
    font-size: 0.9em;
`;

export const AthChange = styled.h6`
    font-size: 0.9em;
    color: ${({color}) => (color ? '#16c784' : '#ea3943')};

    > span {
        color: #000;
    }
`;

export const AthDate = styled.h6`
    font-size: 0.9em;

`