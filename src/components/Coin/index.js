import React from 'react'
import { CoinCard, CoinImage, CoinName, CoinPrice, CoinMCap } from './Coin.elements'
import { ButtonLink } from '../Button.element'

const Coin = ({coin}) => {

    return (
        <CoinCard>
            <CoinImage src={coin.image}/>
            <CoinName>{coin.name}</CoinName>
            <CoinPrice>${(coin.current_price).toLocaleString()}</CoinPrice>
            <CoinMCap>Market Cap: ${(coin.market_cap).toLocaleString()}</CoinMCap>
            <ButtonLink to="/marketplace">Buy now</ButtonLink>
        </CoinCard>
    )
}

export default Coin
