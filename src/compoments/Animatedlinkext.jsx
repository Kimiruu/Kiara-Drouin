import React from 'react';
import './AnimatedLink.scss';


const AnimatedLinkext = ({href, name}) => {
  return (
    <a href={href} className="animated-link">
         {name}
    </a>
  );
};

export default AnimatedLinkext;