import styled from 'styled-components'


export const MarketContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        height: 1200px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const MarketWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;


export const MarketH1 = styled.h1`
    font-size: 2.5 rem;
    color: #000;
    margin-bottom: 64px;

    @media sceen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

