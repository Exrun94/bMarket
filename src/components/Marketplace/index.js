import React from 'react'
import MarketList from './MarketList'
import { MarketContainer } from './MarketList.elements'
import MarketNav from './MarketNav'
import SearchBar from '../SearchBar'
import { useAuth } from '../../contexts/AuthContext'



const MarketPlace = () => {

    const { currentUser} = useAuth();

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
