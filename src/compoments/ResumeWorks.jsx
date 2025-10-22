import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ResumeWorks.scss';

export default class ResumeWorks extends Component {
  render() {
    const projectsData = this.props.projects || [];
    const projectPairs = [];
    for (let i = 0; i < projectsData.length; i += 2) {
      projectPairs.push(projectsData.slice(i, i + 2));
    }

    return (
      <div className="ResumeWorks">
        {projectPairs.map((pair, rowIndex) => (
          <div key={rowIndex} className={`row row--pattern${rowIndex % 2 === 0 ? 1 : 2}`}>
            {pair.map((project, index) => (
              <NavLink
                key={project.id}
                to={project.navlink}
                className={`project ${index === 0 ? 'left' : 'right'}`}
              >
                <img src={project.cover} alt={project.title} />
                <div className="overlay">
                  <p>{project.title}</p>
                </div>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
