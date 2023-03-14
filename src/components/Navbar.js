import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../components/assets/logo-light.png'


function Navbar() {
  return (
    <nav>
        <img src={Logo} alt={Logo} />

        <section className='one'>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/service'>Service</Link>
         <Link to='/contact'>Contact</Link>
        </section>
       
    </nav>
  );
}

export default Navbar;
