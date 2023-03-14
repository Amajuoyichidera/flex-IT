import React from 'react'
import mail from '../contact/assets/mail.png'
import phone from '../contact/assets/phone.png'
import '../contact/contact.css'
import { Fade, Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <section className='allcont'>

        <section className='contact'>
            <h1>Contact Us</h1>
        </section>

        <section className='around'>
            <h1>Our Offices Around The World</h1>
        </section>

        <section className='new'> 

        <Slide>
        <section className='york'>
                <h3>New York</h3>
                <h5></h5>
                <p>United States, 307 Wilshire, 2nd Av. <br /> New York 3516.</p>

                <section className='mail'>
                    <section>
                        <img src={mail} alt={mail} />
                    </section>
                    <section>
                        <p>Email:</p>
                        <p>info@example.com</p>
                    </section>
                </section>

                <section className='mail'>
                    <section>
                        <img src={phone} alt={phone} />
                    </section>
                    <section>
                        <p>Phone:</p>
                        <p>+29876543210</p>
                    </section>
                </section>
            </section>

            <section className='york'>
                <h3>London</h3>
                <h5></h5>
                <p>United Kingdom, 12 Smith Town, 2nd <br /> Av. London 2159.</p>

                <section className='mail'>
                    <section>
                        <img src={mail} alt={mail} />
                    </section>
                    <section>
                        <p>Email:</p>
                        <p>info@example.com</p>
                    </section>
                </section>

                <section className='mail'>
                    <section>
                        <img src={phone} alt={phone} />
                    </section>
                    <section>
                        <p>Phone:</p>
                        <p>+969876543210</p>
                    </section>
                </section>
            </section>

              <section className='york'>
                <h3>Tokio</h3>
                <h5></h5>
                <p>Japan, 307 Chinzo Appy Road, <br /> Portsika Way. Tokio 3516.</p>

                <section className='mail'>
                    <section>
                        <img src={mail} alt={mail} />
                    </section>
                    <section>
                        <p>Email:</p>
                        <p>info@example.com</p>
                    </section>
                </section>

                <section className='mail'>
                    <section>
                        <img src={phone} alt={phone} />
                    </section>
                    <section>
                        <p>Phone:</p>
                        <p>+459876543210</p>
                    </section>
                </section>
            </section>

        </Slide>
            
        </section>


        <form>
            <Fade>
            <h1>Have Any Questions? Let's Answer Them</h1>
            <section className='have'>
                <section>
                    <h4>Name <em>*</em></h4>
                    <input type="text" />                    
                </section>
                <section>
                    <h4>E-Mail <em>*</em></h4>
                    <input type="email" />
                </section>
            </section>
            <section className='subject'>
                <h4>Subject <em>*</em></h4>
                <input type="text" />
            </section>
            <section className='mess'>
                <h4>Your Message <em>*</em></h4>
                <input type="text" />
            </section>

            <button>Send Your Message</button>          
            </Fade>            
        </form>


    </section>
  )
}

export default Contact