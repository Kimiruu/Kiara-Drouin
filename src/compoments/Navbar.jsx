import React, { Component } from 'react'
import "./Navbar.scss"
import AnimatedLink from './Animatedlink'

export default class Navbar extends Component {
  render() {
    return (
        <div className='Navbar'>
            <div className='NavbarContainer'>
                <AnimatedLink navlink="/" name='Home'/>
                <AnimatedLink navlink="/works" name='Works'/>
            </div>
        </div>
    )
  }
}
