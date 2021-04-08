import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import LandingView from '../components/LandingView'
import Sections from '../components/Sections'
import Service from '../components/Sections/Service'
import { SectionAbout, SectionDiscover, SectionSignUp } from '../components/Sections/Sections.config'
import Market from '../components/Sections/Market'


const Home = () => {

    return (
        <Router>
            <LandingView />
            <Sections {...SectionAbout}/>
            <Market />
            <Sections {...SectionDiscover}/>
            <Service />
            <Sections {...SectionSignUp}/>
        </Router>
    )
}

export default Home
