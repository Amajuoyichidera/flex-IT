import React from 'react'
import free from '../price/assets/free.png'
import stand from '../price/assets/stand.png'
import pro from '../price/assets/pro.png'
import ultimate from '../price/assets/ultimate.png'
import '../price/price.css'
import { Fade } from "react-awesome-reveal";

const Price = () => {
  return (
    <section className='allprice'>

        <Fade>
        <section className='price'>
            <section>
                <h1>. PRICING PLANS .</h1>
                <h1>Affordable Pricing Plans</h1>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis <br /> Id Atque Dignissimos Repellat Quae Ullam.</p>
            </section>
            <section>
                <button>See All Plans &nbsp; &#10141;</button>
            </section>
        </section>


        <section className='free'>

            <section className='plan'>
                <img src={free} alt={free} />
                <h3>Free Plan</h3>
                <section className='dollar'>
                    <span>$</span>
                    <section className='zero'>
                        <h1>00</h1>
                        <p>Per Project</p>
                    </section>
                </section>
                <p>150 Lorem, Ipsum Dolor. <br /> 20 Lorem Ipsum Dolor Sit . <br /> Lorem Ipsum Dolor Sit. <br /> Free Lorem Ipsum Dolor . <br /> Added Lorem Ipsum Dolor.</p>
                <button className='select'>Select Plan</button>
            </section>

            <section className='plan'>
                <img src={stand} alt={free} />
                <h3>Standerd Plan</h3>
                <section className='dollar'>
                    <span>$</span>
                    <section className='zero'>
                        <h1>85</h1>
                        <p>Per Project</p>
                    </section>
                </section>
                <p>150 Lorem, Ipsum Dolor. <br /> 20 Lorem Ipsum Dolor Sit . <br /> Lorem Ipsum Dolor Sit. <br /> Free Lorem Ipsum Dolor . <br /> Added Lorem Ipsum Dolor.</p>
                <button className='select'>Select Plan</button>
            </section>

            <section className='plan1'>
                <img src={pro} alt={free} />
                <h3>Pro Plan</h3>
                <section className='dollar'>
                    <span>$</span>
                    <section className='zero1'>
                        <h1>150</h1>
                        <p>Per Project</p>
                    </section>
                </section>
                <p>150 Lorem, Ipsum Dolor. <br /> 20 Lorem Ipsum Dolor Sit . <br /> Lorem Ipsum Dolor Sit. <br /> Free Lorem Ipsum Dolor . <br /> Added Lorem Ipsum Dolor.</p>
                <button className='select1'>Select Plan</button>
            </section>

           <section className='plan'>
                <img src={ultimate} alt={free} />
                <h3>Ultimate Plan</h3>
                <section className='dollar'>
                    <span>$</span>
                    <section className='zero'>
                        <h1>210</h1>
                        <p>Per Project</p>
                    </section>
                </section>
                <p>150 Lorem, Ipsum Dolor. <br /> 20 Lorem Ipsum Dolor Sit . <br /> Lorem Ipsum Dolor Sit. <br /> Free Lorem Ipsum Dolor . <br /> Added Lorem Ipsum Dolor.</p>
                <button className='select'>Select Plan</button>
            </section>

        </section>

        </Fade>
       

    </section>
  )
}

export default Price