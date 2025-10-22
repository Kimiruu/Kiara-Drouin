import React, { Component } from 'react'
import './About.scss'
import OpenPdfButton from '../compoments/OpenPdfButton'
import SkillsIcon from '../compoments/SkillsIcon'
import { SkillsData, ToolsData, LearningData } from '../assets/AboutData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin , faGithub , faItchIo } from '@fortawesome/free-brands-svg-icons'

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <div className='PageContainer'>
            <div className='InfoContainer'>
                <img src="./profilepicture.JPEG" alt="moi" className='ProfileImg' />
                <div className='DescriptionContainer'> 
                    <p className='Subtitle'>Hello I'm Kiara.</p>
                    <p className='Description'>I'm a game dev student based in Cannes and Paris. 
                      Passionate about create beautiful and meaningful games.
                    </p>
                    <div className='ButtonContainer'>
                      <div className='IconContainer'>
                        <a href="https://www.linkedin.com/in/kiara-drouin/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='icon' />
                        </a>
                        <a href="https://github.com/Kimiruu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='icon' />
                        </a>
                        <a href="https://kimiru.itch.io/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faItchIo} className='icon' />
                        </a>
                      </div>
                        <OpenPdfButton/>
                    </div>
                </div>
            </div>
            <div className='QualificationContainer'>
                <div className='grid-items'>
                <h2>Skills</h2>
                {SkillsData.map(skill => (
                    <SkillsIcon key={skill.name} link={skill.link} icon={skill.icon} name={skill.name} />
                ))}
                <ul>
                    <li>Narrative Design</li>
                    <li>Problem solving</li>
                    <li>Agile team & project management</li>
                    <li>Continuous learning</li>
                </ul>
                </div>
                <div className='grid-items'>
                <h2>Tools</h2>
                {ToolsData.map(tool => (
                    <SkillsIcon key={tool.name} link={tool.link} icon={tool.icon} name={tool.name} />
                ))}
                <h2>Currently learning</h2>
                {LearningData.map(learning => (
                    <SkillsIcon key={learning.name} link={learning.link} icon={learning.icon} name={learning.name} />
                ))}
                </div>
                <div className='grid-items'>
                <h2>Languages</h2>
                <p>Fluent french, fluent english</p>
                </div>
                <div className='grid-items'>
                <h2>Education</h2>
                <div className='education'>
                  <p>Software Engineering bachelor degree @ Efrei Paris</p>
                  <p>Management, Video games, Image, Creativity master degree @ Université côte d'azur</p>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
