import React from 'react'
import '../portfolio/portfolio.css'
import App from '../portfolio/assets/app.jpg'
import cloud from '../portfolio/assets/cloud.jpg'
import analy from '../portfolio/assets/analy.jpg'
import host from '../portfolio/assets/hosting.jpg'
import seo from '../portfolio/assets/seo.jpg'
import other from '../portfolio/assets/other.jpg'
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {
  return (
   <section className='allport'>

    <Fade>
    <section className='istport'>
        <section className='port'>
         <h1>. PORTFOLIO .</h1>
         <h1>Awesome Portfolio</h1>

         <section className='allmobile'>
            <p>All</p>
            <p>Mobile</p>
            <p>Web Apps</p>
            <p>Data Analysis</p>
            <p>Hosting</p>
         </section>

        </section>
       
        
        <section className='portbtn'>
            <button>See More &nbsp; &#10141; </button>
        </section>
    </section>


     <section className='hove'>

     <section>
      <div className="hoverwrap">
      <img src={App} alt={App}/>
      <div className="hovercap">Mobile Apps</div>
      </div>
    </section>

    <section>
      <div className="hoverwrap">
      <img src={cloud} alt={App}/>
      <div className="hovercap">Cloud</div>
      </div>
    </section>

    <section>
      <div className="hoverwrap">
      <img src={analy} alt={App}/>
      <div className="hovercap">Data Analysis</div>
      </div>
    </section>    

     </section>


     
     <section className='hove'>

     <section>
      <div className="hoverwrap">
      <img src={host} alt={App}/>
      <div className="hovercap">Hosting</div>
      </div>
    </section>

    <section>
      <div className="hoverwrap">
      <img src={seo} alt={App}/>
      <div className="hovercap">SEO</div>
      </div>
    </section>

    <section>
      <div className="hoverwrap">
      <img src={other} alt={App}/>
      <div className="hovercap">Other Category</div>
      </div>
    </section>    

     </section>
   

    </Fade>
    
   
   </section>
  )
}

export default Portfolio