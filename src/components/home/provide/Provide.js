import React from 'react'
import '../provide/provide.css'
import illustrate from '../provide/provimg/illustrate.png'

const Provide = () => {
  return (
    <section className='sol'>
        <section className='it'>
        <section>
            <p>.IT SOLUTIONS.</p>
            <h1>Providing The Best Services & IT</h1>
            <h1>Solutions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus magnam quibusdam facere modi ea autem aperiam praesentium quae ut quas, sequi, accusantium explicabo voluptates alias tenetur porro voluptatibus quisquam!</p>
             
             <section>
                <button>Start Now</button>
                <button></button>
             </section>
        </section>

        <section>
            <img src={illustrate} alt={illustrate} />

        </section>
    </section>
    </section>
    
  )
}

export default Provide