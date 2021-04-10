import React, { useState, useEffect } from 'react'
import coinGecko from '../../api/APIUtils'
import { TR, TD, Table, Img, MarketWrapper, THEAD, TBODY, SPAN, Details } from './MarketList.elements'


const MarketList = () => {

    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
           const response = await coinGecko.get('/coins/markets', {
                params: {
                    vs_currency: "usd",
                    per_page: 100,
                    price_change_percentage: "1h,24h,7d"
                }
            })

            setCoins(response.data)
            setLoading(false)

        }

        fetchData()
    }, [])

    const renderCoins = () => {
        if(loading) {
            return <tr><td><div>Loading...</div></td></tr>
        }

        return (
            <>
                {coins.map(coin => { 
                    return (
                        <TR key={coin.id}>
                            <TD className="rank">{coin?.market_cap_rank}</TD>
                            <TD className="img"><Img src={coin?.image} alt={coin?.name} /></TD>
                            <TD className="name"><Details to={coin.id}>{coin?.name}</Details> <SPAN>{(coin.symbol)?.toUpperCase()}</SPAN></TD>
                            <TD className="price font">${(coin?.current_price)?.toLocaleString()}</TD>
                            <TD className="change font" color={coin?.price_change_percentage_1h_in_currency > 0}>{(coin?.price_change_percentage_1h_in_currency)?.toFixed(2)}%</TD>
                            <TD className="change font" color={coin?.price_change_percentage_24h > 0}>{(coin?.price_change_percentage_24h)?.toFixed(2)}%</TD>
                            <TD className="change font" color={coin?.price_change_percentage_7d_in_currency > 0}>{(coin?.price_change_percentage_7d_in_currency)?.toFixed(2)}%</TD>
                            <TD className="volume font">${(coin?.total_volume)?.toLocaleString()}</TD>
                            <TD className="cap font">{(coin.market_cap)?.toLocaleString()}</TD>
                        </TR>
                    )})}
            </>
        )
    }
    
    return (
        <>
            <MarketWrapper>
                <Table>
                    <THEAD>
                        <TR>
                            <TD>#</TD>
                            <TD></TD>
                            <TD>Name</TD>
                            <TD>Price</TD>
                            <TD>1h %</TD>
                            <TD>24h %</TD>
                            <TD>7d %</TD>
                            <TD>Volume</TD>
                            <TD>Market Cap</TD>
                        </TR>
                    </THEAD>
                    <TBODY>
                        {renderCoins()}
                    </TBODY>
                </Table>
            </MarketWrapper>
        </>
    )
}

export default MarketList