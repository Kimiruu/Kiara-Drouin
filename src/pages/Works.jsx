import React, { Component } from 'react';
import ResumeWorks from '../compoments/ResumeWorks';
import './Works.scss';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      selectedCategory: 'all',
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const querySnapshot = await getDocs(collection(db, "Projects"));
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Tri du plus récent au plus ancien
      projectsData.sort((a, b) => {

        const yearDiff = (b.year || 0) - (a.year || 0);
        if (yearDiff !== 0) return yearDiff;
        const monthDiff = (b.month || 0) - (a.month || 0);
        if (monthDiff !== 0) return monthDiff;

        const idA = isNaN(a.id) ? a.id : Number(a.id);
        const idB = isNaN(b.id) ? b.id : Number(b.id);
        return idB > idA ? 1 : idB < idA ? -1 : 0;
      });

      this.setState({ projects: projectsData, loading: false });
    } catch (error) {
      console.error("Erreur lors du chargement des projets :", error);
      this.setState({ loading: false });
    }
  }

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { projects, selectedCategory, loading } = this.state;

    if (loading) return <p>Chargement...</p>;

    const filteredProjects =
      selectedCategory === 'all'
        ? projects
        : projects.filter((p) =>
            Array.isArray(p.category)
              ? p.category.includes(selectedCategory)
              : p.category === selectedCategory
          );

    return (
      <div className='Page'>
        <div className="WorksContainer">
          <div className="buttonsContainer">
            <button
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => this.handleCategoryChange('all')}
            >
              See all
            </button>
            <button
              className={selectedCategory === 'video games' ? 'active' : ''}
              onClick={() => this.handleCategoryChange('video games')}
            >
              Video Games
            </button>
            <button
              className={selectedCategory === 'web' ? 'active' : ''}
              onClick={() => this.handleCategoryChange('web')}
            >
              Web
            </button>
            <button
              className={selectedCategory === 'design' ? 'active' : ''}
              onClick={() => this.handleCategoryChange('design')}
            >
              Graphic design
            </button>
            <button
              className={selectedCategory === 'progress' ? 'active' : ''}
              onClick={() => this.handleCategoryChange('progress')}
            >
              & In Progress ❤️
            </button>
          </div>

          <ResumeWorks projects={filteredProjects} />

          <div className='separator'></div>
        </div>
      </div>
    );
  }
}
