import React from 'react'
import MarketList from './MarketList'
import { MarketContainer } from './MarketList.elements'
import MarketNav from './MarketNav'
import SearchBar from '../SearchBar'

const MarketPlace = () => {
    return (
        <>  
            <MarketContainer>
                <MarketNav />
                <SearchBar placeholder="Search coins.." />
                <MarketList />
            </MarketContainer>
        </>
    )
}

export default MarketPlace
