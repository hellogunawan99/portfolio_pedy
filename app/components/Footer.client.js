'use client';

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe, FaUser, FaCogs, FaProjectDiagram, FaFileAlt } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <FaEnvelope className="mr-2 text-gray-400" /> Contact
            </h3>
            <p><FaEnvelope className="inline mr-2 text-gray-400" /> your.email@example.com</p>
            <p><FaPhone className="inline mr-2 text-gray-400" /> (123) 456-7890</p>
            <p><FaMapMarkerAlt className="inline mr-2 text-gray-400" /> City, State/Country</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <FaGlobe className="mr-2 text-gray-400" /> Connect
            </h3>
            <ul>
              <li><a href="https://linkedin.com/in/yourprofile" className="hover:text-gray-300"><FaLinkedin className="inline mr-2 text-gray-400" /> LinkedIn</a></li>
              <li><a href="https://github.com/yourusername" className="hover:text-gray-300"><FaGithub className="inline mr-2 text-gray-400" /> GitHub</a></li>
              <li><a href="https://yourportfolio.com" className="hover:text-gray-300"><FaGlobe className="inline mr-2 text-gray-400" /> Portfolio</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <FaFileAlt className="mr-2 text-gray-400" /> Quick Links
            </h3>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-gray-300"><FaUser className="inline mr-2 text-gray-400" /> About Me</a></li>
              <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="hover:text-gray-300"><FaCogs className="inline mr-2 text-gray-400" /> Skills</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="hover:text-gray-300"><FaProjectDiagram className="inline mr-2 text-gray-400" /> Projects</a></li>
              <li><a href="/resume" className="hover:text-gray-300"><FaFileAlt className="inline mr-2 text-gray-400" /> Resume</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Gunawan Wibisono. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;