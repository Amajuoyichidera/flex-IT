import React from 'react'
import log from '../trust/assets/log.png'
import ipsum from '../trust/assets/ipsum.png'
import cele from '../trust/assets/cele.png'
import logdark from '../trust/assets/logdark.png'
import net from '../trust/assets/net.png'
import ultra from '../trust/assets/ultra.png'
import '../trust/trust.css'
import { Slide } from "react-awesome-reveal";

const Trust = () => {
  return (
    <section className='trust'>
      <Slide>
      <h1>Trusted By Over 500 Clients Around The World</h1>
        <figure>
            <img src={log} alt={log} />
            <img src={ipsum} alt={log} />
            <img src={cele} alt={log}/>
            <img src={logdark} alt={log}/>
            <img src={net} alt={log} />
            <img src={ultra} alt={log} />
        </figure>
      </Slide>
       
    </section>
  )
}

export default Trust