import React from 'react'
import web from '../serv/assets/web.png'
import dig from '../serv/assets/dig.png'
import sas from '../serv/assets/sas.png'
import app from '../serv/assets/app.png'
import seo from '../serv/assets/seo.png'
import data from '../serv/assets/data.png'
import '../serv/service.css'
import { Slide } from "react-awesome-reveal";


const Service = () => {
  return (
    <section className='allserv'>
        <section className='service'>
            <section>
                <h1 className='vice'>. SERVICES .</h1>
                <h1 className='we'>Services We Offer</h1>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis <br />Id Atque Dignissimos Repellat Quae Ullam.</p>
            </section>

            <section>
                <button>See All Servies &nbsp; &#10141; </button>
            </section>
        </section>


        <Slide>
            
        <section className='red'> 
       
       <section className='web'>
              <img src={web} alt={web} />
              <h3>Web Development</h3>
              <p>Lorem ipsum dolor sit amet <br /> consecltetur adipisicing elit. Omnis <br /> tempore perfe rendis explicabo.</p>
              <p className='read'>Read More &nbsp; &#10141; </p>
          </section>

      
          <section className='web'>
          <img src={dig} alt={dig} />
              <h3>Digital Marketing</h3>
              <p>Lorem ipsum dolor sit amet <br /> consecltetur adipisicing elit. Omnis <br /> tempore perfe rendis explicabo.</p>
              <p className='read'>Read More &#10141; </p>
          </section>


          <section className='web'>
          <img src={sas} alt={sas} />
              <h3>SaaS Products </h3>
              <p>Lorem ipsum dolor sit amet <br /> consecltetur adipisicing elit. Omnis <br /> tempore perfe rendis explicabo.</p>
              <p className='read'>Read More &#10141; </p>
          </section>

      </section>

        </Slide>


        <Slide>
        <section className='red'>
            <section className='web'>
                <img src={app} alt={app} />
                <h3>Apps Development</h3>
                <p>Lorem ipsum dolor sit amet <br /> consecltetur adipisicing elit. Omnis <br /> tempore perfe rendis explicabo.</p>
                <p className='read'>Read More &#10141; </p>
            </section>

            <section className='web'>
            <img src={seo} alt={seo} />
                <h3>SEO Services</h3>
                <p>Lorem ipsum dolor sit amet <br /> consecltetur adipisicing elit. Omnis <br /> tempore perfe rendis explicabo.</p>
                <p className='read'>Read More &#10141; </p>
            </section>

            <section className='web'>
            <img src={data} alt={data} />
                <h3>Data Analysis</h3>
                <p>Lorem ipsum dolor sit amet <br /> consecltetur adipisicing elit. Omnis <br /> tempore perfe rendis explicabo.</p>
                <p className='read'>Read More &#10141; </p>
            </section>

        </section>
        </Slide>
     


       
    </section>
  )
}

export default Service