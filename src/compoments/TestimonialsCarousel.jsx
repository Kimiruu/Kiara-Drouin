import React, { Component, useState } from 'react'
import './TestimonialsCarousel.scss';

function TestimonialsCarousel() {
  // Notre tableau de 4 slides (témoignages)
  const slides = [
    {
      name: "Vincent Hébert",
      role: "CFO @ Interconstruction",
      image: "./LBN.jpg", // Remplacez par la vraie URL
      testimony: "Robyn has been a very reliable coworker...",
      linkedin: "#", // URL LinkedIn
      skills: "INITIATIVE / COMMUNICATION"
    },
    {
      name: "Jane Doe",
      role: "Project Manager @ SomeCompany",
      image: "https://via.placeholder.com/150",
      testimony: " is highly efficient...",
      linkedin: "#",
      skills: "TEAMWORK / ORGANIZATION"
    },
    {
      name: "John Smith",
      role: "Lead Developer @ CodeFactory",
      image: "https://via.placeholder.com/150",
      testimony: "Great problem-solving skills...",
      linkedin: "#",
      skills: "PROBLEM-SOLVING / REACT"
    },
    {
      name: "Mary Johnson",
      role: "HR @ BigCorp",
      image: "https://via.placeholder.com/150",
      testimony: "Always kind and resourceful...",
      linkedin: "#",
      skills: "COMMUNICATION / EMPATHY"
    }
  ];

  // État pour suivre l’index du slide actuel (0, 1, 2, 3)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gestion du clic sur un des 4 boutons
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      {/* Le « ruban » qui contient toutes les slides */}
      <div 
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img 
              src={slide.image} 
              alt={slide.name} 
              className="carousel-portrait"
            />
            <h2>
              {slide.name},
              <span> {slide.role}</span>
            </h2>
            <p className="carousel-testimony">
              {slide.testimony}
            </p>

            {/* Lien LinkedIn (icône) */}
            <a href={slide.linkedin} target="_blank" rel="noreferrer">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                alt="LinkedIn"
                className="linkedin-icon"
              />
            </a>

            <p className="endorsed-label">Endorsed skills</p>
            <p className="endorsed-skills">{slide.skills}</p>
          </div>
        ))}
      </div>

      {/* Les 4 « dots » en bas */}
      <div className="carousel-buttons">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={
              "carousel-dot" + (index === currentSlide ? " active" : "")
            }
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsCarousel;


// F7D8CA background color