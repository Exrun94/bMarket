import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../components/Navbar'
import LandingView from '../components/LandingView'
import Sections from '../components/Sections'
import { SectionOne, SectionThree, SectionTwo } from '../components/Sections/data'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <Router>
            <Navbar toggle={toggle}/>
            <LandingView />
            <Sections {...SectionOne}/>
            <Sections {...SectionTwo}/>
            <Sections {...SectionThree}/>
        </Router>
    )
}

export default Home
