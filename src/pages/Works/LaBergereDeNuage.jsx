import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import InformationProject from '../../compoments/InformationProject'
import WhatDidILearn from '../../compoments/WhatDidILearn'
import chrome from '../../../public/Chrome.png'
import './Work.scss'

export default function LaBergereDeNuage() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const db = getFirestore();
      const q = query(collection(db, "Projects"), where("id", "==", 1));
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
          We are in a fantasy universe. Everything can be alive: the wind, water, plants, trees, raindrops... You can also find fantastical creatures, shepherds who tend to cloud sheep, animals of all kinds, and sometimes even humans. 
          <br /><br />
          Cloud sheep control the weather, so they are an important part of the ecosystem. It is thanks to them that plants grow, animals and creatures drink, and the universe remains in balance.
          <br /><br />
          In September 2024, I was selected to join a team of 11 people working on an ambitious project: to create a 15-minute playable game prototype to be presented at the Cannes International Games Festival (FIJ) in February 2025.
          <br /><br />
          The selection process involved a team interview, in which second-year Master's students recruited first-year Master's students according to their needs in development, design or communication. My profile was selected for my programming skills.

        </div>
        <div className="full">
          <img src="/bergere.png" alt="ingame" />
        </div >
        <div className="full">
          The game, entitled La Bergère de Nuages (The Cloud Shepherdess), is a narrative and poetic point-and-click game in which the player takes on the role of a shepherdess who guides clouds through various mini-games and puzzles in a dreamlike universe.
          <br /><br />
          As a Unity developer, I contributed to various aspects of the project: developing game mechanics (interactions, scene logic, mini-games), integrating graphic assets, animations and sounds, creating small puzzles that could be played as part of the storyline, participating in weekly reviews to assess progress, and working closely with the game design, narration and art direction teams.
          <br /><br />
          The game world was so coherent and appreciated by the team that we even developed merchandise based on the game for the FIJ (stickers, illustrated cards). This was an opportunity to see our work move beyond the digital realm and create a direct connection with the public.

        </div>
        <WhatDidILearn text="Ce projet m’a permis de développer mes compétences en travail d’équipe pluridisciplinaire, en organisation de projet sur le long terme, et en adaptation technique et créative dans un contexte professionnel exigeant."/>
      </div>
    </div>
  );
}