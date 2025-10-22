import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import InformationProject from '../../compoments/InformationProject'
import WhatDidILearn from '../../compoments/WhatDidILearn'
import chrome from '../../../public/Chrome.png'
import './Work.scss'

export default function TheJollyHotChocolatier() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const db = getFirestore();
      const q = query(collection(db, "Projects"), where("id", "==", 5));
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
          In January 2023, I took part in my first game jam at the Cozy Game Jam organised on itch.io. It was also my very first experience of game development as part of a team, and a real challenge: the group members were spread across several time zones, with up to a 7-hour time difference.
          <br /><br />
          Despite this constraint, we designed and developed a playable prototype in just four days, using Unity. The Jolly Hot Chocolatier is a game where you play as a Hot Chocolatier celebrating the winter time with hot chocolates and chocolatey drinks from all around the world. You have to make hot chocolates that come in patches of 2 different drinks to fulfill orders for customers.
          <br /><br />
          The project, entitled The Jolly Hot Chocolatier, is a game developed in Unity, in which the player takes on the role of a chocolatier who must prepare hot drinks for customers in a cosy, winter setting.
          <br /><br />
          My role within the team was to participate in the gameplay development, integrate assets into unity collaborating on game logic and user experience, and communicate with my team through Discord.
          <br /><br />
          One of the biggest technical and human challenges was working in shifts, with each member located in a different country. This taught us to communicate effectively, use simple and easy-to-learn tracking tools, and work with a modular approach and clear code so that others could easily take over tasks.
          <br /><br />
          Unfortunately, the client system could not be finalized, which limited the game's functionality. Despite this, the game remains playable and the visual and audio atmosphere has been well received on itch.io.

        </div>
        <WhatDidILearn text="This experience allowed me to strengthen my teamwork and project organisation skills under pressure, while gaining confidence, rigour and a desire to collaborate on new video game creations."/>
      </div>
    </div>
  );
}