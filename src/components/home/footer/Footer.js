import React from 'react'
import logo from '../footer/assets/logo-colored.png'
import call from '../footer/assets/call.png'
import fb from '../footer/assets/fb.png'
import inst from '../footer/assets/inst.png'
import locate from '../footer/assets/locate.png'
import mail from '../footer/assets/mail.png'
import twi from '../footer/assets/twi.png'
import you from '../footer/assets/you.png'

const Footer = () => {
  return (
    <footer>
        <section>
            <img src={logo} alt={logo} />
            <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Voluptatibus facere modi <br /> possimus dignissimos, aliquam nobis eaque? <br /> Voluptatem magnam quisquam rem.</p>
            <p>Subscribe To Our News Letter</p>

            <section>
                <input type="text" placeholder='Email Address' />
                <button>Subscribe</button>
                <p>*We Will Not Share Your Personal Info</p>
            </section>
            <p>© 2022 Created by: amin-themes</p>
        </section>

        <section>
            <h3>Useful Links</h3>
            <p>Google</p>
            <p>Dribble</p>
            <p>Linkedin</p>
            <p>Wikipedia</p>
        </section>

        <section>
            <h3>Resources</h3>
            <p>Support</p>
            <p>Dashboard</p>
            <p>Drivers</p>
            <p>Projects</p>
        </section>

        <section>
            <h3>Contact Information</h3>

            <section>
                <img src={mail} alt={mail} />
                <p>example@support.com</p>
            </section>

            <section>
                <img src={locate} alt={locate} />
                <p>5 xyz st., abc, alexandria, egypt.</p>
            </section>

            <section>
                <img src={call} alt={call} />
                <p>+20123456789</p>
            </section>

            <figure>
                <img src={fb} alt={fb} /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
            </figure>
        </section>
    </footer>
  )
}

export default Footer