import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axios from '../../../api/APIUtils'
import { 
    Ath,
    AthChange,
    AthDate,
    CirculationSupply,
    Container,
    High24, 
    Img, 
    Low24, 
    MarketCap, 
    Name, 
    Price, 
    PriceChange24, 
    PriceChangePercentage24, 
    Rank, 
    TotalSupply, 
    Volume,
    Wrapper,
    MainWrapper

 } from './CoinDetails.elements'



const CoinDetails = () => {

    const currentCoin = useLocation().pathname.split('/').join('')
    const [coin, setCoin] = useState([])

    
    useEffect(() => {
        const fetchData = async() => {
           const response = await axios.get(`/coins/markets`, {
                params: {
                    vs_currency: 'usd',
                    ids: currentCoin,
                    per_page: 1,
                    price_change_percentage: '1h,24h,7d,30d,1y'
                }
            })

            setCoin(response.data)
            return fetchData

        }

        fetchData()
    }, [])


    return (
        <>
            {coin.map(data => {
                return (
                    <Container key={coin.id}>
                        <MainWrapper>
                            <Wrapper>
                                <Img src={data.image} />
                                <Name>{data.name}</Name>
                                <Rank>Rank: #{data.market_cap_rank}</Rank>
                            </Wrapper>
                            <Wrapper>
                                <Price>Price: ${(data.current_price).toLocaleString()}</Price>
                                <MarketCap>Market Cap: ${(data.market_cap).toLocaleString()}</MarketCap>
                                <Volume>Volume: ${(data.total_volume).toLocaleString()}</Volume>
                                <CirculationSupply>Circulating Supply: {data.circulating_supply}</CirculationSupply>
                                <TotalSupply>Max Supply: {data.total_supply}</TotalSupply>
                            </Wrapper>  
                            <Wrapper>
                                <PriceChange24 color={(data.price_change_24h > 0) ? 1 : 0}><span>Price change 24h:</span> ${(data.price_change_24h).toFixed(2)}</PriceChange24>
                                <PriceChangePercentage24><span>Percentage change 24h:</span> {(data.price_change_percentage_24h).toFixed(2)}%</PriceChangePercentage24>
                                <High24>High 24h: ${(data.high_24h).toLocaleString()}</High24>
                                <Low24>Low 24h: ${(data.low_24h).toLocaleString()}</Low24>
                                <Ath>${(data.ath).toLocaleString()}</Ath>
                                <AthChange color={(data.ath_change_percentage > 0) ? 1 : 0}><span>Percentage change from ATH:</span> {(data.ath_change_percentage).toFixed(2)}%</AthChange>
                                <AthDate>ATH Date: {(data.ath_date).split('T')[0]}</AthDate>
                            </Wrapper>
                        </MainWrapper>
                    </Container>
                )
            })}
        </>
    )
}

export default CoinDetails


