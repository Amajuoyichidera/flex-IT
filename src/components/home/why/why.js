import React from 'react'
import late from '../why/assets/late.png'
import work from '../why/assets/work.png'
import '../why/why.css'
import { Fade } from "react-awesome-reveal";

const why = () => {
  return (
    <section className='allwhy'>

        <Fade>
            
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
        <section className='late tilt-box'>
            <img src={late} alt={late} />
        </section>
	</div>
</div>

        


        <section className='whycus'>
            <h1 className='choose'>.. WHY CHOOSE US .</h1>
            <h1>Why Our Customers <br /> Choose <img src={work} alt={work} /> With <br /> Us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, <br /> aliquam est! rerum inventore animi at iusto totam sunt accusamus <br /> quia</p>

            <section className='tech'>
                <section>
                    <h2>01 .</h2>
                </section>
                <section>
                    <h3>Latest Technologies</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque <br /> repellendus minima reiciendis nobis dolore obcaecati.</p>
                </section>
            </section>

            <section className='tech'>
                <section>
                    <h2>02 .</h2>
                </section>
                <section>
                    <h3>Unique Solutions</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque <br /> repellendus minima reiciendis nobis dolore obcaecati.</p>
                </section>
            </section>

            <section className='tech'>
                <section>
                    <h2>03 .</h2>
                </section>
                <section>
                    <h3>Powerful Strategies</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque <br /> repellendus minima reiciendis nobis dolore obcaecati.</p>
                </section>
            </section>

            <button>Get In Touch</button>

        </section>

        </Fade>


    </section>
  )
}

export default why