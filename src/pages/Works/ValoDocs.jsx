import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import InformationProject from '../../compoments/InformationProject'
import WhatDidILearn from '../../compoments/WhatDidILearn'
import chrome from '../../../public/Chrome.png'
import './Work.scss'

export default function ValoDocs() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const db = getFirestore();
      const q = query(collection(db, "Projects"), where("id", "==", 3));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        setProject(data);
      }
    };

    fetchProject();
  }, []);

  if (!project) return <div>Loading...</div>;

  return (
    <div className='Page'>
      <div className='work'>
        <InformationProject
          image={project.cover}
          title={project.title}
          skills={project.skills}
          context={project.context}
          mission={project.missions}
          time={project.time}
          link={project.links}
          nameLink={project.nameLink}
        />
        <div className='full'> 
          This project was born out of my desire to combine web development with the world of video games. I decided to use my spare time to create a web application dedicated to Valorant, allowing users to view agents and their skills, game maps, and available weapons.Everything was designed and developed entirely by me: from the design on Figma to the programming in React.js, including the integration of the Valorant API.
          <br /><br />
          The objectives of this project were to challenge myself technically with an unfamiliar external API, to create a responsive and intuitive application, to design a clear interface inspired by e-sport designs, and to learn how to structure a React application with dynamic data.
          <br /><br />
          The technical stack used includes: React.js (components, hooks, routing), ValorantAPI (agent and map data), Figma (UI design), CSS Modules (responsive styling) and Fetch API (data retrieval).

        </div>
        <WhatDidILearn text="This project allowed me to deepen my mastery of React and REST APIs, better understand asynchronous data management, and structure a modern application combining performance, modularity, and a smooth user experience."/>
      </div>
    </div>
  );
}