import React, { useState, useEffect } from 'react'
import coinGecko from '../../api/APIUtils'
import Coin from '../Coin'

import { 
    MarketContainer,
    MarketWrapper,
    MarketH1,
 } from './Market.elements'

const Market = () => {

    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
           const response = await coinGecko.get('/coins/markets', {
                params: {
                    vs_currency: "usd",
                    ids: "bitcoin, ethereum, binancecoin,"
                }
            })
            setCoins(response.data)
            setLoading(false)
        }
        fetchData()
    }, [])

    const renderCoins = () => {
        if(loading) {
            return <div>Loading...</div>
        }

        return (
            <>
                {coins.map(coin => { 
                    return <Coin key={coin.id} coin={coin}></Coin>})}
            </>
            )
    }

    return (
        <>
            <MarketContainer id="market">
                <MarketH1>The Kings</MarketH1>
                <MarketWrapper>
                    {renderCoins()}
                </MarketWrapper>
            </MarketContainer>
        </>
    )
}

export default Market
