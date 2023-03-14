import React from 'react'
import Abt from './abt/Abt'
import Provide from './provide/Provide'
import Services from './serv/Services'
import Why from './why/Why'
import Number from './number/Number'
import Portfolio from './portfolio/Portfolio'
import Trust from './trust/Trust'
import Price from './price/Price'
import Slider from './slider/Slider'

const Home = () => {
  return (
    <div>
      <Provide />
      <Services />
      <Abt />
      <Why />
      <Number />
      <Portfolio />
      <Trust />
      <Price />
      <Slider />

    </div>
  )
}

export default Home