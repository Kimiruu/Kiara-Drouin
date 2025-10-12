import React, { Component } from 'react'
import './SkillsIcon.scss'

export default class SkillsIcon extends Component {
  render() {
    return (
      <>
        <a href={this.props.link} target='_blank' className='SkillsIcon'>
            <img src={this.props.icon} alt={this.props.name} className='Icon' />
        </a>
      </>
    )
  }
}
