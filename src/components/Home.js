import React from 'react'
import Hero from './hero/Hero'
import Booking from './booking/Booking'
import Services from './services/Services'
import Offers from './offers/Offers'

const Home = () => {
  return (
    <div>
        <Hero />
        <Booking />
        <Services />
        <Offers />
    </div>
  )
}

export default Home