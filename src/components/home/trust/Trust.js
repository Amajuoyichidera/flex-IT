import React from 'react'
import log from '../trust/assets/log.png'
import ipsum from '../trust/assets/ipsum.png'
import cele from '../trust/assets/cele.png'
import logdark from '../trust/assets/logdark.png'
import net from '../trust/assets/net.png'
import ultra from '../trust/assets/ultra.png'
import '../trust/trust.css'

const Trust = () => {
  return (
    <section className='trust'>
        <h1>Trusted By Over 500 Clients Around The World</h1>
        <figure>
            <img src={log} />
            <img src={ipsum} />
            <img src={cele}/>
            <img src={logdark}/>
            <img src={net} />
            <img src={ultra} />
        </figure>
    </section>
  )
}

export default Trust