import React from 'react'
import nine from '../abt/assets/nine.png'
import first from '../abt/assets/first.png'
import easy from '../abt/assets/easy.png'
import word from '../abt/assets/word.png'
import two from '../abt/assets/two.png'
import girly from '../abt/assets/girly.png'
import sign from '../abt/assets/signature-light.png'
import '../abt/abt.css'



const Abt = () => {
  return (
    <section className='allabt'>
        <section className='abt'>
            <h1>. ABOUT US .</h1>
            <h1>Trusted By Worldwide <br /> Clients Since <img src={nine} alt={nine} /> </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, <br /> aliquam est! rerum inventore animi at iusto totam sunt accusamus <br /> quia</p>
        </section>

        <section className='girlflex'>
          <section>
            <section  className='allfirst'>

              <section className='field'>
                <section>
                <img src={first} alt={first} />
                </section>
               
                <section>
                  <h3>First On Field</h3>
                  <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing <br /> elit. Aspernatur, iste</p>
                </section>
              </section>

              <section className='field'>
                <section>
                <img src={easy} alt={easy} />
                </section>
               
                <section>
                  <h3>Easy To Reach</h3>
                  <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing <br /> elit. Aspernatur, iste</p>
                </section>
              </section>
            
            </section>

            <section  className='allfirst'>
              
              <section className='field'>
                <section>
                <img src={word} alt={word} />
                </section>
                
                <section>
                  <h3>Worldwide <br /> Services</h3>
                  <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing <br /> elit. Aspernatur, iste</p>
                </section>
              </section>

              <section className='field'>
                <section>
                <img src={two} alt={two} />
                </section>
                
                <section>
                  <h3>24/7 Support</h3>
                  <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing <br /> elit. Aspernatur, iste</p>
                </section>
              </section>
            
            </section>

          </section>

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
    <section className='girly tilt-box'>
            <img src={girly} alt={girly} />
          </section>
	</div>
</div>

       
        </section>

        <section className='touch'>
          <section>
          <button>Get in touch</button>
          </section>          
          <section>
            <img src={sign} alt={sign} />
            <h4>CEO & Founder</h4>
          </section>
        </section>

    </section>
  )
}

export default Abt