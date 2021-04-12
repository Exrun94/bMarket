import React from 'react'
import MarketList from './MarketList'
import { MarketContainer } from './MarketList.elements'
import MarketNav from './MarketNav'




const MarketPlace = () => {


    return (
        <>  
            <MarketContainer>
                <MarketNav />
                <MarketList />
            </MarketContainer>
        </>
    )
}

export default MarketPlace
