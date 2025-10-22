import React, { Component } from 'react'
import './InformationProject.scss'

function InformationProject(props) {
  return (
    <div className='InformationProject'>
      <div className='ImageContainer'>
        <img src={props.image} alt="img" className='TitleImg' />
        <span className='titleProject'>{props.title}</span>
      </div>

      <div className='InfoContainer'>
        <div className='titletext'>
          <span className='title'>Skills</span>
          <span>{props.skills}</span>
        </div>

        <div className='separator' />

        <div className='titletext'>
          <span className='title'>Context</span>
          <span>{props.context}</span>
        </div>

        <div className='separator' />

        <div className='titletext'>
          <span className='title'>Mission</span>
          <span>{props.mission}</span>
        </div>

        <div className='separator' />

        <div className='titletext'>
          <span className='title'>Time</span>
          <span>{props.time}</span>
        </div>

        <div className='separator' />

        {props.link && props.link.trim() !== '' && (
          <>
            <div className='titletext'>
              <span className='title'>Links</span>
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.nameLink}
              </a>
            </div>
            <div className='separator' />
          </>
        )}
      </div>
    </div>
  )
}

export default InformationProject