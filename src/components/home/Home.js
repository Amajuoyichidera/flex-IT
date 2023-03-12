import React from 'react'
import Abt from './abt/Abt'
import Provide from './provide/Provide'
import Service from './serv/Service'
import Why from './why/Why'
import Number from './number/Number'
import Portfolio from './portfolio/Portfolio'
import Trust from './trust/Trust'

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

    </div>
  )
}

export default Home