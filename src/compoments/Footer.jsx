import React, { Component } from 'react'
import './Footer.scss'
import AnimatedLink from './Animatedlink'

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='Bottom'>
            <p>Let's work together</p>
            <div>
                <img className='kirby' src="./kirby.png" alt="kirby" />
            </div>
            <div>
            <AnimatedLink href="https://login.univ-cotedazur.fr/login" name='email@email.com'/>
            </div>
            <p>Code with ❤️ by me</p>
        </div>
      </div>
    )
  }
}
