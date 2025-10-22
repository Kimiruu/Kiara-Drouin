import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import InformationProject from '../../compoments/InformationProject'
import WhatDidILearn from '../../compoments/WhatDidILearn'
import chrome from '../../../public/Chrome.png'
import './Work.scss'

export default function OnlyOneLight() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const db = getFirestore();
      const q = query(collection(db, "Projects"), where("id", "==", 11));
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
          Created as part of the Pirate Software Game Jam, Lightbound is a project based on the theme ‘Only One’. My team and I chose to explore light as the only means of survival. We imagined a game in which the player takes on the role of a scientist terrified of the dark, seeking to escape from his own laboratory after unwittingly bringing to life a malevolent entity that is sensitive to light.
          <br /><br />
          The founding idea behind the gameplay is based on a simple concept: only light can save the player, and only one living energy source is capable of creating it. This energy, which is both an invention and a friend, can be embodied in objects capable of producing light – light bulbs, security cameras or even robots – to light the scientist's path and allow him to progress through a series of environmental puzzles.
          <br /><br />
          As a Unity developer, I designed the main game mechanics, including character movement. 
          <br /><br />
          The team was small, there were only two of us, and without an artist, we had to step outside our comfort zone to come up with a consistent and expressive visual style. I created all of the 2D animations used in the game, adopting a deliberately childlike style that was simple to produce but expressive enough to convey the character's emotions. This visual choice proved particularly effective in the context of a jam, where time and resources are limited.
          <br /><br />
          We then designed several level prototypes exploring different gameplay variations around light and fear. Unfortunately, unforeseen personal circumstances prevented us from finalising a presentable version of the game within the allotted time frame. Nevertheless, we believe that the Lightbound concept has real potential and we plan to revisit it at a later date, with a more polished art direction and an enriched gaming experience.
          <br /><br />
          This experience was particularly memorable on a personal level. It allowed me to consolidate my Unity development skills while exploring new areas such as 2D animation and visual direction. Working without an artist pushed me to experiment, improvise and find quick solutions, while maintaining aesthetic and technical consistency. Despite time constraints and unforeseen circumstances, this jam was a real creative laboratory for me, revealing the importance of flexibility, mutual support and a shared vision within a small team.
        </div>
      </div>
    </div>
  );
}