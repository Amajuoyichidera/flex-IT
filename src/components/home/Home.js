import React from 'react'
import Abt from './abt/Abt'
import Provide from './provide/Provide'
import Service from './serv/Service'
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
      <Service />
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