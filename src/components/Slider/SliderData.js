import { useState, useEffect } from 'react'
import coinGecko from '../../api/APIUtils'

const SliderData = () => {

    const [coins, setCoins] = useState([])

    useEffect(() => {
        const fetchData = async() => {
           const response = await coinGecko.get('/coins/markets', {
                params: {
                    vs_currency: "usd",
                    per_page: 30,
                }
            })

            setCoins(response.data)
            return response
        }

        fetchData()
    }, [])


    return coins
}

export default SliderData
