import React from 'react'
import Services from '../home/serv/Services'
import Slider from '../home/slider/Slider'
import '../service/service.css'

const Service = () => {
  return (
    <section>
      <section className='services'>
        <h1>Services</h1>
      </section>
      <Services />
      <Slider />
    </section>
  )
}

export default Service