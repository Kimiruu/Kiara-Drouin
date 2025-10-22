import React, { Component } from 'react'
import './Home.scss'
import Projects from '../compoments/Projects'
import ProjectsInProgress from '../compoments/ProjectsInProgress'
import TestimonialsCarousel from '../compoments/TestimonialsCarousel'
import About from './About'
import { NavLink } from 'react-router-dom'
import AnimatedLink from '../compoments/Animatedlink'

export default class Home extends Component {
  render() {
    return (
        <div className='Page'>
            <div className='Home'>
                <div className='Top'>
                    <p>Hello, I'm Kiara.</p>
                    <p>A game developer.</p>
                </div>
                    <About/>
                <div className='RecentProject'>
                    <p>My most recent projects</p>
                    <Projects/>
                    <div className='LinkContainer'>
                        <AnimatedLink navlink="/works" name="see more"/>
                    </div>
                </div>
                <div className='RecentProject'>
                    <p>In progress...</p>
                    <ProjectsInProgress/>
                    <div className='LinkContainer'>
                        <AnimatedLink navlink="/works" name="see more"/>
                    </div>
                </div>
                {/* <div className='CarousselContianer'>
                    <p>A word from my friends and team mates</p>
                    <TestimonialsCarousel/>
                </div> */}
            </div>
        </div>
    )
  }
}
