'use client';

import { useState } from 'react';
import { FaFileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
    // Add more projects here...
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);
  const initialProjectCount = 3;

  const loadMore = () => {
    setVisibleProjects(prevVisible => Math.min(prevVisible + 3, allProjects.length));
  };

  const showLess = () => {
    setVisibleProjects(initialProjectCount);
  };

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allProjects.slice(0, visibleProjects).map((project) => (
            <div 
              key={project.id} 
              className="relative h-64 rounded-lg overflow-hidden shadow-lg group transition-all duration-300 ease-in-out transform hover:scale-105 hover:z-10"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 flex flex-col justify-end group-hover:bg-opacity-70">
                <div className="p-6 transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-white text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                  <a 
                    href={project.pdf} 
                    download
                    className="inline-flex items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:underline"
                  >
                    <FaFileAlt className="mr-2" />
                    Documentation
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          {visibleProjects < allProjects.length ? (
            <button 
              onClick={loadMore}
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Show More <FaChevronDown className="inline ml-2" />
            </button>
          ) : visibleProjects > initialProjectCount && (
            <button 
              onClick={showLess}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Show Less <FaChevronUp className="inline ml-2" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}