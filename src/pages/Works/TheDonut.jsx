import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import InformationProject from '../../compoments/InformationProject'
import WhatDidILearn from '../../compoments/WhatDidILearn'
import chrome from '../../../public/Chrome.png'
import './Work.scss'

export default function TheDonut() {
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
          In September 2025, I decided to teach myself 3D modelling. To do this, I followed Blender Guru's famous ‘Donut’ tutorial, an ideal series for learning the fundamentals of Blender.
          <br /><br />
          In the space of five days, I recreated the entire scene from scratch, exploring the essential tools of Blender 4.
          <br /><br />
          The objectives of this project were to familiarise myself with the basics of 3D modelling, explore texturing, lighting and rendering in Blender, follow a complete workflow from the creation of the raw model to the final scene, and discover the Blender 4 interface and its sculpting, shading and camera tools.
          <br /><br />
          This project helped me understand how 3D design software works and made me want to take it further. It fits in with my desire to add another creative string to my bow, particularly for future projects involving games, mock-ups or 3D illustrations.

        </div>
        <div className="full">
          <video controls width="100%">
                <source src="/donutanim.mp4" type="video/mp4" />
                Your browser does not support the video tag.
          </video>
        </div>
        <WhatDidILearn text="This project allowed me to strengthen my skills in 3D modelling, texturing and lighting, while mastering rendering and compositing techniques to create visually striking scenes."/>
      </div>
    </div>
  );
}