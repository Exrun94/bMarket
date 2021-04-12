import React, { useState } from 'react'
import LandingView from '../components/LandingView'
import Sections from '../components/Sections'
import Service from '../components/Sections/Service'
import { SectionAbout, SectionDiscover, SectionSignUp } from '../components/Sections/Sections.config'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import { useAuth } from '../contexts/AuthContext'


const HomePage = () => {

    const { currentUser } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
  }
  
    return (
        <>
            <Navbar toggle={toggle}/>
            <LandingView />
            <Sections {...SectionAbout}/>
            <Slider />
            <Sections {...SectionDiscover}/>
            <Service />
            {!currentUser && <Sections {...SectionSignUp}/>}
        </>
    )
}

export default HomePage
