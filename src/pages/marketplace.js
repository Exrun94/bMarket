import React from 'react'
import SearchBar from '../components/SearchBar'
import MarketPlace from '../components/Marketplace'


const Marketplace = () => {
    return (
        <>
            <SearchBar type="text" placeholder="Search"/>
            <MarketPlace />
        </>
    )
}

export default Marketplace
