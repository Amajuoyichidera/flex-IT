// import React from 'react'
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../slider/slider.css'
import amin from '../slider/assets/amin.png'
import fair from '../slider/assets/fair.png'
import osman from '../slider/assets/osman.png'

export default class Testimonials extends Component {
    render() {
      return (

        <section className="alltest">
            <section className="cost"> 
                <h1>. TESTIMONIALS .</h1>
                <h1 className="test">Customers Testmonials</h1>
            </section>



            <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
            
          <div>            
            <img src={amin} alt={amin} />
            <div className="myCarousel">
              <h3>Yusuf Amin</h3>
              <h4>Founder</h4>
              <p>
              Lorem Ipsum Dolor Sit Amet Consectetur <br /> Adipisicing Elit Omnis Id <br /> Atque Dignissimos Repellat Quae Ullam.
              </p>
            </div>
          </div>
  
          <div>
            <img src={osman} alt={osman} />
            <div className="myCarousel">
              <h3>Fouad Osman</h3>
              <h4>Officer</h4>
              <p>
              Lorem Ipsum Dolor Sit Amet Consectetur <br /> Adipisicing Elit Omnis Id <br /> Atque Dignissimos Repellat Quae Ullam.
              </p>
            </div>
          </div>
  
          <div>
            <img src={fair} alt={fair} />
            <div className="myCarousel">
              <h3>Fairouz Mumud</h3>
              <h4>Manager</h4>
              <p>
              Lorem Ipsum Dolor Sit Amet Consectetur <br /> Adipisicing Elit Omnis Id <br /> Atque Dignissimos Repellat Quae Ullam.
              </p>
            </div>
          </div>
        </Carousel>

        </section>
        
      );
    }
  }