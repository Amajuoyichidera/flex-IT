import React from 'react'
import finish from '../number/assets/finish.png'
import create from '../number/assets/create.png'
import happy from '../number/assets/happy.png'
import year from '../number/assets/year.png'
import '../number/number.css'

const Number = () => {
  return (
    <section className='allnum'>

        
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
        <section className='finish tilt-box'>
            <img src={finish} alt={finish} />
            <h1>750+</h1>
            <p>Finished Projects</p>            
        </section>
	</div>
</div>


        
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
        <section className='finish tilt-box'>
            <img src={create} alt={create} />
            <h1>23+</h1>
            <p>Created Jobs</p>            
        </section>
	</div>
</div>


        
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
       
        <section className='finish tilt-box'> 
            <img src={happy} alt={happy} />
            <h1>200+</h1>
            <p>Happy Customers</p>            
        </section>

	</div>
</div>


        
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
        <section className='finish tilt-box'>
            <img src={year} alt={year} />
            <h1>28+</h1>
            <p>Years Of Exprience</p>            
        </section>
	</div>
</div>
       

       

       

    </section>
  )
}

export default Number