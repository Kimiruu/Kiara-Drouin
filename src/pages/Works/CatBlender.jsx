import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import InformationProject from '../../compoments/InformationProject'
import WhatDidILearn from '../../compoments/WhatDidILearn'
import chrome from '../../../public/Chrome.png'
import './Work.scss'

export default function CatBlender() {
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
          Right after completing my very first 3D project (the donut), I wanted to continue improving while exploring a different graphic style. So I followed a tutorial to create and animate a cat hidden in a paper bag... but this time, with a very specific rendering: 3D that looks like 2D.
        </div>

        <div className='half'>
          <div className='half1'>
            The style of the project is very similar to a cartoon, thanks to flat shaders, sharp outlines and the use of Grease Pencil to accentuate certain details by hand.
            <br /><br />
            Although the tutorial served as a general guide, I took many creative and technical liberties: I applied the knowledge I had acquired on my previous project to gain autonomy, optimised the scene by reducing more than 200,000 faces while maintaining a faithful rendering, explored animation and rigging tools to bring the character to life, and discovered Grease Pencil, which is ideal for adding drawn lines and enhancing the 2D look.
          </div>
          <div className='half2'>
            <img src="/catswireframe.png" alt="wireframe" />
          </div>
        </div>

          <div className="half">
            <div className="half1">
              <img src="/catRig.png" alt="rig" />
            </div>
            <div className="half2">
            Completed in just three days after my classes, this project allowed me to work on an original graphic style combining 2D and 3D, modelling and animating a stylised character, as well as adding hand-drawn elements to enhance expressiveness.
            <br /><br />
            This project is important to me, not only technically, but also artistically. I was able to explore a new visual style, learn how to bring a character to life, and strengthen my ability to adapt to different types of rendering.
            <br /><br />
            It's also a project I'm particularly proud of, because I completed it independently in a very short time.
            </div>
          </div>

          <div className='full'> 
            <video controls width={950}>
              <source src="/catAnim.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>

        <WhatDidILearn text="This project allowed me to combine 3D techniques and stylised 2D rendering, explore character animation, and develop my creativity by making personal technical decisions beyond the tutorials."/>
      </div>
    </div>
  );
}