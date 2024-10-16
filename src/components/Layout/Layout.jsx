import React from 'react'
import "./Layout"

import Hero from '../HeroSection/Hero'
import Services from '../ServicesSection/Services'
import Review from '../ReviewSection/Review'
import Explore from '../ExploreSection/Explore'
import Footer from '../FooterSection/Footer'

const Layout = () => {
  return (
    <>
    <Hero/>
    <Services/>
    <Review/>
    <Explore/>
    <Footer/>
    </>
  )
}

export default Layout