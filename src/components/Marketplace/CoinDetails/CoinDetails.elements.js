import styled from 'styled-components'
import {Link} from 'react-router-dom'

// export const Container = styled.div`
//     height: 800px;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: flex-start;
//     padding-top: 30px;
//     background: #f9f9f9;

//     @media screen and (max-width: 768px) {
//         height: 1100px;
//     }

//     @media screen and (max-width: 480px) {
//         height: 1300px;
//     }

// `;

// export const MainWrapper = styled.div`
//     display: flex;
//     background-color: #fff;
//     justify-content: center;
//     align-items: flex-start;
// `;

// export const Wrapper = styled.div`
//     background: #fff;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     border-radius: 10px;
//     max-height: 340px;
//     min-width: 440px;
//     padding: 30px;
//     margin: 0 15px 0 15px;

// `;

// export const Img = styled.img`
//     height: 160px;
//     margin-left: 25px;
// `;

// export const Name = styled.h1`
//     display: flex;
//     align-self: flex-start;
//     margin-left: 45px;
//     margin-top: 15px;

// `;

// export const Price = styled.h3`
//     font-size: 1.3em;
//     margin-bottom: 10px;
// `;

// export const MarketCap = styled.h3`
//     font-size: 1.1em;
//     margin-bottom: 10px;
// `;

// export const Rank = styled.h6`
//     display: flex;
//     align-self: flex-start;
//     margin-left: 45px;
//     margin-top: 15px;
//     font-size: 1.1em;
//     color: #6e6e6e;
// `;

// export const Volume = styled.h3`
//     font-size: 1.1em;
//     margin-bottom: 10px;
// `;

// export const High24 = styled.h3`
//     font-size: 0.9em;

// `;

// export const Low24 = styled.h3`
//     font-size: 0.9em;

// `;

// export const PriceChange24 = styled.h3`
//     font-size: 0.9em;
//     color: ${({color}) => (color ? '#16c784' : '#ea3943')};

//     > span {
//         color: #000;
//     }

// `;

// export const PriceChangePercentage24 = styled.h3`
//     font-size: 0.9em;
//     color: ${({color}) => (color ? '#16c784' : '#ea3943')};

//     > span {
//         color: #000;
//     }
// `;

// export const CirculationSupply = styled.h3`
//     font-size: 1.1em;
//     margin-bottom: 10px;
// `;

// export const TotalSupply = styled.span`
//     font-size: 1.1em;
//     margin-bottom: 10px;
// `;

// export const Ath = styled.h6`
//     font-size: 0.9em;
// `;

// export const AthChange = styled.h6`
//     font-size: 0.9em;
//     color: ${({color}) => (color ? '#16c784' : '#ea3943')};

//     > span {
//         color: #000;
//     }
// `;

// export const AthDate = styled.h6`
//     font-size: 0.9em;

// `

export const FormContainer = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%);
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: #000;
        transition: all 0.2s ease-in-out;
    }
`;

export const Text = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const FormError = styled.p`
    font-size: 0.8rem;
    background-color: #ff5a5a;
    color: #fff;
    border: 1px solid #ffacac;
    border-radius: 4px;
    padding: 10px 0 10px 50px;
`;