import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons' 
import InformationProject from '../compoments/InformationProject'

export default class Work extends Component {
  render() {
    return (
      <div>Work
        <NavLink to='/works' className={'arrow'}>
        <FontAwesomeIcon icon={faChevronLeft} />
        </NavLink>
        <div className='topcontainer'>
          <img src="" alt="" />
          <p></p>
        </div>
        <div className='infocontainer'>
          <InformationProject/>
        </div>
      </div>
    )
  }
}
