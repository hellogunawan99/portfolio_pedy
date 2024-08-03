'use client';

import React, { useState } from 'react';
import { FaFileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './Projects.module.css';

export default function Projects() {
  const allProjects = [
    { 
      id: 1, 
      title: 'Cloud Migration Project', 
      description: 'Led a team in migrating on-premises infrastructure to AWS, resulting in 30% cost reduction and improved scalability.',
      image: '/project1.jpg',
      pdf: '/project1.pdf'
    },
    { 
      id: 2, 
      title: 'Automated CI/CD Pipeline', 
      description: 'Implemented a fully automated CI/CD pipeline using Jenkins, Docker, and Kubernetes, reducing deployment time by 70%.',
      image: '/project2.jpg',
      pdf: '/project2.pdf'
    },
    { 
      id: 3, 
      title: 'Infrastructure as Code Implementation', 
      description: 'Developed and maintained Infrastructure as Code using Terraform, improving infrastructure consistency and reducing provisioning time by 60%.',
      image: '/project3.jpg',
      pdf: '/project3.pdf'
    },
    { 
      id: 4, 
      title: 'Automated CI/CD Pipeline', 
      description: 'Implemented a fully automated CI/CD pipeline using Jenkins, Docker, and Kubernetes, reducing deployment time by 70%.',
      image: '/project2.jpg',
      pdf: '/project2.pdf'
    },
    { 
      id: 5, 
      title: 'Infrastructure as Code Implementation', 
      description: 'Developed and maintained Infrastructure as Code using Terraform, improving infrastructure consistency and reducing provisioning time by 60%.',
      image: '/project3.jpg',
      pdf: '/project3.pdf'
    },
    { 
      id: 6, 
      title: 'Infrastructure as Code Implementation', 
      description: 'Developed and maintained Infrastructure as Code using Terraform, improving infrastructure consistency and reducing provisioning time by 60%.',
      image: '/project3.jpg',
      pdf: '/project3.pdf'
    },
    { 
      id: 7, 
      title: 'Infrastructure as Code Implementation', 
      description: 'Developed and maintained Infrastructure as Code using Terraform, improving infrastructure consistency and reducing provisioning time by 60%.',
      image: '/project3.jpg',
      pdf: '/project3.pdf'
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(5);
  const initialProjectCount = 5;

  const showMoreProjects = () => {
    setVisibleProjects(allProjects.length);
  };

  const showLessProjects = () => {
    setVisibleProjects(initialProjectCount);
  };

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">My Projects</h2>
        <div className={styles.projectsContainer}>
          {allProjects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <a 
                  href={project.pdf} 
                  download
                  className={styles.projectLink}
                >
                  <FaFileAlt className="mr-2" />
                  FSD (Functional Specification Document)
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          {visibleProjects < allProjects.length ? (
            <button 
              onClick={showMoreProjects}
              className="bg-orange-400 text-white py-2 px-4 rounded-full hover:bg-orange-500 transition duration-300 flex items-center justify-center mx-auto"
            >
              Show More <FaChevronDown className="ml-2" />
            </button>
          ) : visibleProjects > initialProjectCount && (
            <button 
              onClick={showLessProjects}
              className="bg-orange-400 text-white py-2 px-4 rounded-full hover:bg-orange-500 transition duration-300 flex items-center justify-center mx-auto"
            >
              Show Less <FaChevronUp className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}