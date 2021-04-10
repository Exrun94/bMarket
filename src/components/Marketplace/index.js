import React from 'react'
import MarketList from './MarketList'
import { MarketContainer } from './MarketList.elements'

const MarketPlace = () => {
    return (
        <> 
            <MarketContainer>
                <MarketList />
            </MarketContainer>
        </>
    )
}

export default MarketPlace
