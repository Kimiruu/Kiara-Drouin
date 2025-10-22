import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import InformationProject from '../../compoments/InformationProject'
import WhatDidILearn from '../../compoments/WhatDidILearn'
import chrome from '../../../public/Chrome.png'
import './Work.scss'

export default function ChromeExtension() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const db = getFirestore();
      const q = query(collection(db, "Projects"), where("id", "==", 4));
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
          As part of my personal projects, I developed my very first Chrome extension, a project born out of a real need I encounter on a daily basis: notifying my friends and followers when I start a Twitch live stream, without having to post a story or send private messages to each of them.
          <br/>
          With a bachelor's degree in web development, I wanted to use my skills to design a simple and effective solution. The idea was to link my personal life to my technical knowledge, while setting myself a new challenge: learning how to create a Chrome extension, an area I was not yet familiar with.
          <br/>
          So I immersed myself in the official Chrome documentation (which is very clear and well structured), which allowed me to quickly understand the necessary basics. In less than a week, I designed and developed, on my own, an extension in JavaScript, HTML and CSS (vanilla).

        </div>
        <div className='half'>
          <div className='half1'>
            My 'offline' screen in the extension acts as a link to my Twitch channel.
            <br/><br/>
            The social media icons redirect directly to the pages dedicated to my channel.
            <br/><br/>
            I also paid particular attention to the design of the interface, taking inspiration from what already existed, while adapting it to the design of my Twitch channel and my specific needs.
            <br/><br/>
            Also the name isn't up to date anymore that's why the two image have different names.
          </div>
          <div className='half2'>
            <img src={chrome} alt="chrome" />
          </div>
        </div>
        <WhatDidILearn text="This project enabled me to develop my independence and enhance my technical skills while transforming a specific need into a functional tool."/>
      </div>
    </div>
  );
}