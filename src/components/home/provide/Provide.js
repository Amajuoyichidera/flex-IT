import React from 'react'
import '../provide/provide.css'
import illustrate from '../provide/provimg/illustrate.png'
import sol from '../provide/provimg/sol.png'
import play from '../provide/provimg/play.png'
import fb from '../provide/provimg/fb.png'
import you from '../provide/provimg/you.png'
import twi from '../provide/provimg/twi.png'

const Provide = () => {
  return (
        <section className='it'>
        <section className='sol'>
          <section className='fb'>
            <img src={fb} alt={fb} />
            <img src={you} alt={you} />
            <img src={twi} alt={twi} />
          </section>
            <p className='lut'>. IT SOLUTIONS .</p>
            <h1 className='prov'>Providing The Best <br /> Services & IT</h1>
            <img src={sol} alt={sol} />
            <p className='lor'>Lorem ipsum dolor sit amet consectetur <br /> Architecto temporibus magnam eehndk </p>
             
             <section className='start'>
              <section>
              <button>Start Now</button>
              </section>
                
                <section>
                <img src={play} alt={play} />
                </section>
                
             </section>
        </section>

        <section>
        <div class="contaienr">
	<div class="tilt-box-wrap">
		<span className="t_over"></span>
		<span className="t_over"></span>
		<span className="t_over"></span>
		<span className="t_over"></span>
		<span className="t_over"></span>
		<span className="t_over"></span>
		<span className="t_over"></span>
		<span className="t_over"></span>
		<span className="t_over"></span>
		<div className="tilt-box">
    <img className='illus' src={illustrate} alt={illustrate} />
		</div>
	</div>
</div>

           
        </section>
    </section>
    
  )
}

export default Provide