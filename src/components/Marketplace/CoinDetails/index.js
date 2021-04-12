import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../../../api/APIUtils'
import { FormContainer,FormWrap,Icon,FormContent,Form,FormH1,FormError,FormLabel,FormInput,FormButton,Text } from './CoinDetails.elements'
import { useAuth } from '../../../contexts/AuthContext'



const CoinDetails = () => {

    const currentCoin = useLocation().pathname.split('/').join('')
    const [coin, setCoin] = useState([])
    const [error, setError] = useState('')
    const [total, setTotal] = useState(0)
    const { balance, marketPurchase } = useAuth()
    const amountRef = useRef()


    function onChange(e) {
        e.preventDefault()
        const current = e.target.value * coin?.[0]?.current_price

       return setTotal(current)
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        if(total > balance?.[0]?.usd) {
            return setError("Not enough balance")
        }

        if(total !== +total) {
            return setError("Please type a number")
        }

        marketPurchase(coin?.[0]?.name, amountRef.current.value, (balance?.[0]?.usd - total))

    }

    useEffect(() => {
        const fetchData = async() => {
           const response = await axios.get(`/coins/markets`, {
                params: {
                    vs_currency: 'usd',
                    ids: currentCoin,
                    per_page: 1,
                    price_change_percentage: '1h,24h,7d,30d,1y'
                }
            })

            setCoin(response.data)
            
        }

        fetchData()
    }, [currentCoin])


    return (
        <>
            <FormContainer>
                <FormWrap>
                    <Icon to="/">bMarket</Icon>
                    <FormContent>
                        <Form onChange={onChange} onSubmit={handleSubmit}>
                            <FormH1>Checkout</FormH1>
                            {error && <FormError>{error}</FormError>}
                            <FormH1 key={coin?.[0]?.id} htmlFor='for'>Currency: {coin?.[0]?.name}</FormH1>
                            <FormH1 htmlFor='for'>Current Price: ${(coin?.[0]?.current_price)?.toLocaleString()}</FormH1>
                            <FormLabel htmlFor='for'>Current wallet holdings: ${(balance?.[0]?.usd)?.toFixed(2)}</FormLabel>
                            <FormInput type='text' required placeholder="Purchase amount" ref={amountRef} />
                            <FormLabel htmlFor='for'>Total: ${total.toFixed(2)}</FormLabel>

                            <FormButton type='submit'>Continue</FormButton>
                            <Text to="marketplace">Cancel transaction</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </FormContainer>
        </>
    )
}

export default CoinDetails


