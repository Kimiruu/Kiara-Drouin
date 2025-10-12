import React, { Component } from 'react'
import './Projects.scss'

export default class Projects extends Component {
  render() {
    return (
        <div className="Projects">
        {/* 1ère image (gauche) */}
        <a href="#" className="project">
          <img src="./LBN.jpg" alt="Project 1" />
          <div className="overlay">
            <p>Mon projet de gauche</p>
          </div>
        </a>
        
        {/* 2e image (droite) */}
        <a href="#" className="project">
          <img src="./another-image.jpg" alt="Project 2" />
          <div className="overlay">
            <p>Mon projet de droite</p>
          </div>
        </a>
      </div>
    )
  }
}
