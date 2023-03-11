import React from 'react'
import Abt from './abt/Abt'
import Provide from './provide/Provide'
import Service from './serv/Service'

const Home = () => {
  return (
    <div>
      <Provide />
      <Service />
      <Abt />

    </div>
  )
}

export default Home