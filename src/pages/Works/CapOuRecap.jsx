import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import InformationProject from '../../compoments/InformationProject'
import WhatDidILearn from '../../compoments/WhatDidILearn'
import chrome from '../../../public/Chrome.png'
import './Work.scss'

export default function CapOuRecap() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const db = getFirestore();
      const q = query(collection(db, "Projects"), where("id", "==", 2));
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
            In an academic context, I created a 3D video game on my own as part of a creative project at the end of my first year of my master's degree. The challenge was to design and develop a complete game in two weeks, starting from scratch.
            <br/>
            The concept came to me quite naturally : a pirate game combining exploration, combat and progression. I was immediately excited by this idea, and I used it as the basis for the game design and level design.
        </div>
        <div className='half'>
          <div className='half1'>
            I wanted to create a 3D game, which led me to look for free assets. I chose Kenney's Pirate Kit, which was perfect for this type of universe. For the water, I set myself the goal of reproducing the stylised look of The Legend of Zelda: The Wind Waker HD. After consulting a Medium article (not suitable for Unity), I turned to several tutorials to learn how to create a stylised texture and wave effect on a simple plane.
          </div>
          <div className='half2'>
            <img src="/Water.png" alt="water" />
          </div>
        </div>
        <div className='half'>
          <div className='half1'>
            <img src="/Trello.png" alt="trello" />
          </div>
          <div className='half2'>
            In order to stay organised, I set up a Trello board to keep track of my ideas, priorities, and tasks. This helped me maintain a good overview, especially in such a dense project that I was producing on my own.
          </div>
        </div>
        <div className='full'> 
            The game works in waves of enemies: the player must eliminate them to move on to the next wave. The game has no predefined end, making it an arcade survival experience with increasing difficulty.
        </div>
        <div className="full">
          <img src="/CapRecapIngame.png" alt="ingame" />
        </div>
        <div className='half'>
          <div className='half1'>
            Progression system: at each level, the ship changes its mesh (visually improved) and gains power (e.g. more cannons).
            <br/>
            I also took the time to balance the game: I adjusted the player's power and the price of upgrades to ensure smooth progression and prevent the player from becoming too strong too quickly.
            <br/><br/>
            Even though the game is playable, I still have several ideas listed on my Trello board. It's a project that I plan to improve and enrich as soon as I have the time, because it represents both a learning opportunity and a source of creative enjoyment.
          </div>
          <div className='half2'>
            <img src="/Amelio.png" alt="Amelioration" />
          </div>
        </div>


        <WhatDidILearn text="This project allowed me to strengthen my skills in game design and level design, deepen my mastery of Unity and the 3D workflow, while developing real organisational rigour and autonomy in managing a complete project, from conception to completion."/>
      </div>
    </div>
  );
}