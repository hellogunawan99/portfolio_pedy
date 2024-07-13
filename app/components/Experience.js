'use client';

import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import styles from './Experience.module.css';

const experienceData = [
  {
    id: 1,
    type: 'education',
    title: "Associate's Degree in Oil Palm Plantation",
    organization: 'Institut Perkebunan Yogyakarta',
    date: '2017 - 2018',
    details: 'Focused on management Oil Palm Plantation.'
  },
  {
    id: 2,
    type: 'education',
    title: 'English Mastery Program',
    organization: 'Mr. BOB',
    date: '2018 - 2019',
    details: "This is an intensive program designed to improve participants' English skills within three months."
  },
  {
    id: 3,
    type: 'work',
    title: 'System Administrator',
    organization: 'PT. Saptaindra Sejati',
    date: '2022 - Present',
    details: "A system administrator manages and maintains an FMS (Fleet Management System) infrastructure to ensure optimal performance and security."
  },
  // Add more experiences as needed
];

export default function Experience() {
    return (
      <section id="experience" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Experience</h2>
          <div className={styles.timelineContainer}>
            {experienceData.map((exp, index) => (
              <div key={exp.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineContent}>
                  <div className={`${styles.icon} ${exp.type === 'education' ? 'bg-blue-500' : 'bg-green-500'}`}>
                    {exp.type === 'education' ? (
                      <FaGraduationCap className="text-white" />
                    ) : (
                      <FaBriefcase className="text-white" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{exp.organization}</p>
                  <p className="text-xs text-gray-500 mb-2">{exp.date}</p>
                  <p className="text-sm text-gray-700">{exp.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }