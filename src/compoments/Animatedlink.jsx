import React from 'react';
import './AnimatedLink.scss';
import { NavLink } from "react-router-dom";


const AnimatedLink = ({navlink, name}) => {
  return (
    <NavLink to={navlink} className="animated-link">
         {name}
    </NavLink>
  );
};

export default AnimatedLink;