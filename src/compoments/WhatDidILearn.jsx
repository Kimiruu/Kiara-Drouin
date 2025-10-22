import React from 'react'

function WhatDidILearn(props) {
  return (
    <div className='LearnContainer'>
        <span className='title'>
            What did I learn?
        </span>
        <p className='text'>
            {props.text}
        </p>
    </div>
  )
}

export default WhatDidILearn