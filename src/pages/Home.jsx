import React, { Component } from 'react'
import './Home.scss'
import Projects from '../compoments/Projects'
import TestimonialsCarousel from '../compoments/TestimonialsCarousel'

export default class Home extends Component {
  render() {
    return (
        <div className='Home'>
            <div className='Top'>
                <p>Hello, I'm Robyn.</p>
                <p>A game developer.</p>
            </div>
            <div className='RecentProject'>
                <p>My most recent projects</p>
                <Projects/>
            </div>
            <div className='CarousselContianer'>
                <p>A word from my friends and team mates</p>
                <TestimonialsCarousel/>
            </div>
        </div>
    )
  }
}
