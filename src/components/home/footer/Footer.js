import React from 'react'
import logo from '../footer/assets/logo-colored.png'
import call from '../footer/assets/call.png'
import fb from '../footer/assets/fb.png'
import inst from '../footer/assets/inst.png'
import locate from '../footer/assets/locate.png'
import mail from '../footer/assets/mail.png'
import twi from '../footer/assets/twi.png'
import you from '../footer/assets/you.png'
import '../footer/footer.css'
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer>
        <Slide>
        <section className='sub'>
            <img src={logo} alt={logo} />
            <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Voluptatibus facere modi <br /> possimus dignissimos, aliquam nobis eaque? <br /> Voluptatem magnam quisquam rem.</p>

            <section className='news'>
                <p>Subscribe To Our News Letter</p>
                <input type="text" placeholder='Email Address' />
                <button>Subscribe</button>
                <p className='share'>*We Will Not Share Your Personal Info</p>
            </section>
            <p>© 2023 Created by: David Amajuoyi</p>
        </section>

        <section>
            <h3>Useful Links</h3>
            <p> <span> &#10141; &nbsp;</span> Google</p>
            <p><span> &#10141; &nbsp;</span>Dribble</p>
            <p><span> &#10141; &nbsp;</span>Linkedin</p>
            <p><span> &#10141; &nbsp;</span>Wikipedia</p>
        </section>

        <section>
            <h3>Resources</h3>
            <p><span> &#10141; &nbsp;</span>Support</p>
            <p><span> &#10141; &nbsp;</span>Dashboard</p>
            <p><span> &#10141; &nbsp;</span>Drivers</p>
            <p><span> &#10141; &nbsp;</span>Projects</p>
        </section>

        <section>
            <h3>Contact Information</h3>

            <section className='examp'>
                <img src={mail} alt={mail} />
                <p>example@support.com</p>
            </section>

            <section className='examp'>
                <img src={locate} alt={locate} />
                <p>5 xyz st., abc, alexandria, egypt.</p>
            </section>

            <section className='examp'>
                <img src={call} alt={call} />
                <p>+20123456789</p>
            </section>

            <figure>
                <img src={fb} alt={fb} />
                <img src={you} alt={you} />
                <img src={inst} alt={inst} />
                <img src={twi} alt={twi} />
            </figure>
        </section>

        </Slide>
       
    </footer>
  )
}

export default Footer