import React from 'react'
import "./Layout"

import Hero from '../HeroSection/Hero'
import Services from '../ServicesSection/Services'
import Review from '../ReviewSection/Review'
import Explore from '../ExploreSection/Explore'
import Footer from '../FooterSection/Footer'
import Video from '../Video/Video'

const Layout = () => {
  return (
    <>
    <Hero/>
    <Services/>
    <Review/>
    <Explore/>
    <Video/>
    <Footer/>
    </>
  )
}

export default Layout