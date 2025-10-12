import React, { Component } from 'react';
import ResumeWorks from '../compoments/ResumeWorks';
import './Works.scss';
import { projects } from '../assets/Works';

export default class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'all', // Par défaut, afficher tous les projets
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    // Filtrer les projets en fonction de la catégorie sélectionnée
    const filteredProjects =
      this.state.selectedCategory === 'all'
        ? projects
        : projects.filter(
            (project) => project.category === this.state.selectedCategory
          );

    return (
      <div className="WorksContainer">
        <div className="buttonsContainer">
          <button 
            className={this.state.selectedCategory === 'all' ? 'active' : ''}
            onClick={() => this.handleCategoryChange('all')}
          >
            See all
          </button>
          <button 
            className={this.state.selectedCategory === 'video games' ? 'active' : ''}
            onClick={() => this.handleCategoryChange('video games')}
          >
            Video Games
          </button>
          <button 
            className={this.state.selectedCategory === 'web' ? 'active' : ''}
            onClick={() => this.handleCategoryChange('web')}
          >
            Web
          </button>
          <button 
            className={this.state.selectedCategory === 'design' ? 'active' : ''}
            onClick={() => this.handleCategoryChange('design')}
          >
            Graphic design
          </button>
          <button 
            className={this.state.selectedCategory === 'more' ? 'active' : ''}
            onClick={() => this.handleCategoryChange('more')}
          >
            & More ❤️
          </button>
        </div>
        <ResumeWorks projects={filteredProjects}/>

        <div className='separator'>
        </div>

      </div>
    );
  }
}
