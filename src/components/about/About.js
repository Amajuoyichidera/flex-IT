import React from 'react'
import Abt from '../home/abt/Abt'
import Slider from '../home/slider/Slider'
import black from '../about/assets/black.jpg'
import man from '../about/assets/man.jpg'
import white from '../about/assets/white.jpg'
import '../about/about.css'
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section className='allabout'>
      <section className='abtus'>
        <h1>About Us</h1>
      </section>
      <Abt />

      <section className='team'>
        <section>
          <h1>. TEAM .</h1>
          <h1>Our Experts Team Members</h1>
        </section>

        <section>
        <button>See More &nbsp; &#10141; </button>
        </section>
        
      </section>


      <figure>

        <Slide>
        <section>
          <img src={white} alt={white} />
          <figcaption>
          <h2>Murad Aly</h2>
          <p>co Founder</p>
          </figcaption>
          
        </section>

        <section>
         <img src={black} alt={black} />
         <figcaption>
         <h2>Fairouz Amin</h2>
         <p>manager</p>
         </figcaption>
         
        </section>

        <section>
         <img src={man} alt={man} />
         <figcaption>
         <h2>Beco Smith</h2>
         <p>co Leader</p>
         </figcaption>         
        </section>

        </Slide>       
        
      </figure>

      <Slider />
    </section>
  )
}

export default About