import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import InformationProject from '../../compoments/InformationProject'
import WhatDidILearn from '../../compoments/WhatDidILearn'
import chrome from '../../../public/Chrome.png'
import './Work.scss'

export default function Mindoor() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const db = getFirestore();
      const q = query(collection(db, "Projects"), where("id", "==", 8));
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
          Mindoor is a 3D narrative-driven game with multiple choices and ending developed on Unity, inspired by Road 96, Life is Strange, and Lost Records.
          
        </div>

        <div className='half'>
          <div className='half1'>
            <br /><br />
          You play as Maylee, a young student suffering from traumatic amnesia after the suicide of her childhood friend. She discovers a strange power: when she interacts with certain specific objects, time freezes around her and a door appears, giving her access to her mental space;  a physical manifestation of her amnesia.
          </div>
          <div className='half2'>
            <img src="/Maylee.png" alt="Maylee" />
          </div>
        </div>

        <div className="full">
          <img src="/appart.jpg" alt="appart" />
        </div>

        <div className="full">
          This space takes the form of her student bedroom, which evolves as the story progresses. Inside, Maylee must investigate her friend’s death: uncovering who was responsible, when it happened, and above all why… and how she herself might be involved.
        </div>

        <div className='half'>
          <div className='half1'>
            <img src="/sasha.jpg" alt="sasha" />
          </div>
          <div className='half2'>
            Each gameplay loop within this mental space, once resolved, brings Maylee back to reality, where the investigation continues through her conversations and the choices she makes with the friend who accompanies her.
          </div>
        </div>

        <div className="full">
          Mindoor is a game project currently under development as part of my final year of Master's studies. Designed to be a highly emotional game, it will be presented at the International Games Festival in Cannes in February 2026. We are a team of 16 people: artists, game designers, sound designers, and programmers. I am part of a core group of four M2 students who conceived Mindoor from the outset. I have a dual role: lead narrative designer and lead programmer.
          <br /><br />
          As lead programmer, I am responsible for the entire technical structure of the game, working in tandem with another developer. To ensure our work runs smoothly and clearly, I have set up a GitHub workflow tailored to the needs of a large team project, with development branches, commit conventions, and organisation by feature. This structure also allows other departments to track our progress and quickly test the features we have implemented.
        </div>

        <div className="full">
          As narrative lead and main writer, I oversaw the creation of the universe, characters and story progression. We implemented a method I proposed, called the DNA (Design, Narrative, Artist) structure, to effectively synchronise narrative, artistic and gameplay decisions. This method allowed us to improve consistency and save production time. We also applied it to other areas such as level design, for the concept art.
          <br /><br />
          Mindoor represents an intense and concrete teamwork experience, and a pivotal project in my training, both narratively and technically.
          <br /><br />
          It is also a project I am particularly proud of, as it allows me to combine my two main areas of expertise: interactive writing and narrative systems programming.
        </div>

      </div>
    </div>
  );
}