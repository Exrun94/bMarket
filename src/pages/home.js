import React, { useState } from 'react'
import LandingView from '../components/LandingView'
import Sections from '../components/Sections'
import Service from '../components/Sections/Service'
import { SectionAbout, SectionDiscover, SectionSignUp } from '../components/Sections/Sections.config'
import Market from '../components/Sections/Market'
import Navbar from '../components/Navbar';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
  }
  

    return (
        <>
            <Navbar toggle={toggle}/>
            <LandingView />
            <Sections {...SectionAbout}/>
            <Market />
            <Sections {...SectionDiscover}/>
            <Service />
            <Sections {...SectionSignUp}/>
        </>
    )
}

export default Home
