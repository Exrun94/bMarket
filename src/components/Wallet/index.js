import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

const Wallet = () => {

    const { balance } = useAuth()
    const wallet = balance?.[0]

    return (
        <div>
            {JSON.stringify(wallet)}
        </div>
    )
}

export default Wallet
