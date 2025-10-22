import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import InformationProject from '../../compoments/InformationProject'
import WhatDidILearn from '../../compoments/WhatDidILearn'
import chrome from '../../../public/Chrome.png'
import './Work.scss'

export default function QrcodeHunt() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const db = getFirestore();
      const q = query(collection(db, "Projects"), where("id", "==", 7));
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
          At the start of the 2025/2026 academic year, as a second-year Master's student, I helped organise an induction day for first-year Master's students. To modernise the day and make the experience more interactive, I designed and developed a web application dedicated to a QR code hunt across the campus.
          <br /><br />
          New students were divided into teams and had to scan QR codes hidden around the campus to earn points. The aim was to encourage them to explore the campus while strengthening team spirit.
          <br /><br />
          To do this, I developed a responsive web application, easily usable on mobile devices, which centralises all the activities. The application was developed in React JS with Firebase integration for real-time data management.
        </div>
        <div className='half'>
          <div className='half1'>
            The Key features :
            <ul>
              <li>Team registration with unique name validation;</li>
              <li>QR code scanning to automatically validate points, without the ability to scan the same QR code multiple times or a QR code that is not in the game;</li>
              <li>Scores displayed in the organiser's area, dynamically for each team;</li>
              <li>Organiser's area with secure authentication to track teams' progress and verify scanned QR codes;</li>
              <li>Settings to change team members or team name;</li>
              <li>Local data persistence to prevent loss in the event of temporary disconnection.</li>
            </ul>
              Firebase allowed me to set up a centralized database to store scores and QR codes, and a secure authentication system for organisers with a real-time synchronisation between all users, ideal for a live event.
          </div>
          <div className='half2'>
            <img src="/QrCodesApp.png" alt="firebase" />
          </div>
        </div>
        <div className='full'>
          The application was designed entirely with a mobile-first approach, as it was intended to be used directly on participants' smartphones during the day. The interface is simple, accessible, and only think for mobile.
        </div>
        <WhatDidILearn text="This project allowed me to consolidate my skills in modern web development with React and Firebase, tackle concrete security and performance issues, and successfully complete a collaborative project combining technical requirements and real impact in the field."/>
      </div>
    </div>
  );
}