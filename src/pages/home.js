import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../components/Navbar'
import LandingView from '../components/LandingView'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <Router>
            <Navbar toggle={toggle}/>
            <LandingView />
        </Router>
    )
}

export default Home
