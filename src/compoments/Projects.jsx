import React, { useEffect, useState } from 'react';
import './Projects.scss';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Projects"));
        const projectList = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          // 🔹 Filtrer uniquement les projets “done”
          .filter(project => project.category?.includes("done"));

        // 🔹 Tri : année ↓, mois ↓, id ↓
        projectList.sort((a, b) => {
          if (b.year === a.year) {
            if (b.month === a.month) {
              return b.id - a.id;
            }
            return b.month - a.month;
          }
          return b.year - a.year;
        });

        // 🔹 Prend les 2 plus récents
        setProjects(projectList.slice(0, 2));
      } catch (error) {
        console.error("Erreur lors du chargement des projets :", error);
      }
    };

    fetchProjects();
  }, []);

  if (projects.length === 0) {
    return <div>Chargement des projets...</div>;
  }

  return (
    <div className="Projects">
      {projects.map((project) => (
        <NavLink key={project.id} to={project.navlink} className="project">
          <img src={project.cover} alt={project.title} />
          <div className="overlay">
            <p>{project.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Projects;
