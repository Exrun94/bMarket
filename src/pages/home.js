import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../components/Navbar'
import LandingView from '../components/LandingView'
import Sections from '../components/Sections'
import Service from '../components/Sections/Service'
import { SectionAbout, SectionDiscover, SectionSignUp } from '../components/Sections/Sections.config'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <Router>
            <Navbar toggle={toggle}/>
            <LandingView />
            <Sections {...SectionAbout}/>
            <Sections {...SectionDiscover}/>
            <Service />
            <Sections {...SectionSignUp}/>
        </Router>
    )
}

export default Home
