import React, { Component } from 'react'
import './Footer.scss'
import AnimatedLinkext from './Animatedlinkext'

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='Bottom'>
            <p>Let's work together</p>
            <div>
                <img className='kirby' src="/kirby.png" alt="kirby" />
            </div>
            <div>
            <AnimatedLinkext href="mailto:kiaradrouin@gmail.com" name='kiaradrouin@gmail.com'/>
            </div>
            <p>Code with ❤️ by me</p>
        </div>
      </div>
    )
  }
}
