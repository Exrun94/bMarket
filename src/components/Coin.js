import React from 'react'
import { CoinCard, CoinImage, CoinName, CoinPrice, CoinMCap } from './Coin.elements'
import { Button } from './Button.element'

const Coin = ({coin}) => {

    return (
        <CoinCard>
            <CoinImage src={coin.image}/>
            <CoinName>{coin.name}</CoinName>
            <CoinPrice>${(coin.current_price).toLocaleString()}</CoinPrice>
            <CoinMCap>Market Cap: ${(coin.market_cap).toLocaleString()}</CoinMCap>
            <Button to="/test">Buy now</Button>
        </CoinCard>
    )
}

export default Coin
