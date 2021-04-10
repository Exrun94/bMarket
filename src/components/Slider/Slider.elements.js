import styled from 'styled-components'


export const Container = styled.div`
    height: 800px;
    background: #f9f9f9;
    padding-top: 200px;
`;

export const SliderCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    margin: 0 15px 0 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const Img = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    border-bottom: 1px solid #000;
`;


export const CoinName = styled.h2`
    font-size: 1 rem;
    margin-bottom: 10px;
`;

export const CoinPrice = styled.p`
    font-size: 1rem;
`;

export const CoinMCap = styled.p`
    font-size: 1rem;
    text-align: center;
    padding: 10px;
`;

