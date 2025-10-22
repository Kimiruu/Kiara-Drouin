import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import InformationProject from '../../compoments/InformationProject'
import WhatDidILearn from '../../compoments/WhatDidILearn'
import chrome from '../../../public/Chrome.png'
import './Work.scss'

export default function KittenRescue() {
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
          In January 2023, I decided to set myself a personal challenge: to develop my very first mobile game on my own, from start to finish. The goal was clear: to learn, challenge myself, and publish a functional game on Google Play. In the space of two weeks, I designed the game, programmed the main mechanics, thought about the graphic style, and set up the publication pipeline.
          <br /><br />
          I imagined the universe, the graphic style, the game mechanics, and the overall functioning. The character design (cats) was done by a friend who is an illustrator, and I used an asset library for the interface. Everything else : background, scenery elements, game logic; was designed and developed by me.
          <br /><br />
          The game is based on simple controls adapted for mobile devices, a points system, player progression, and player feedback.
        </div>
        <div className='half'>
          <div className='half1'>
            <img src="/KittenInGame.png" alt="ingame" />
          </div>
          <div className='half2'>
            To structure the project and maintain a clear overview of progress, I used Trello, which allowed me to effectively manage the features to be implemented, priorities and bugs to be fixed, as well as ideas for future versions.
            <br /><br />
            The game is still undergoing internal testing on Google Play. Releasing the game on the store requires a lot of testing, and I am no longer proud enough of this project to want to publish it.
            <br /><br />
            If I find the time to complete this project one day, I would like to better scale the difficulty based on the score, control the main character via gyroscope for more interaction, and add a leaderboard.
          </div>
        </div>
        <WhatDidILearn text="This project allowed me to consolidate my mobile development skills with Unity, master all stages of solo video game production, and acquire a truly agile working methodology focused on iteration and user experience."/>
      </div>
    </div>
  );
}