'use client';

import { useEffect, useRef } from 'react';
import { 
  FaDocker, FaPython, FaGitAlt, FaLinux, FaWindows,
  FaHtml5, FaCss3Alt, FaJs, FaFileExcel, FaFileWord, FaFilePowerpoint
} from 'react-icons/fa';
import { 
  SiGooglecloud, SiKubernetes, SiNginx, SiFreebsd, 
  SiGo, SiFlutter
} from 'react-icons/si';
import { DiGo } from 'react-icons/di';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const skills = [
  { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Bash', icon: AiOutlineConsoleSql, color: '#4EAA25' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624' },
  { name: 'Nginx', icon: SiNginx, color: '#009639' },
  { name: 'FreeBSD', icon: SiFreebsd, color: '#AB2B28' },
  { name: 'GO', icon: DiGo, color: '#00ADD8' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Javascript', icon: FaJs, color: '#F7DF1E' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'Windows', icon: FaWindows, color: '#0078D6' },
  { name: 'Excel', icon: FaFileExcel, color: '#217346' },
  { name: 'Word', icon: FaFileWord, color: '#2B579A' },
  { name: 'PowerPoint', icon: FaFilePowerpoint, color: '#D24726' }
];

export default function Skills() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const animateRow = (rowRef, direction) => {
      if (rowRef.current) {
        rowRef.current.style.animationDuration = '30s';
        rowRef.current.style.animationIterationCount = 'infinite';
        rowRef.current.style.animationTimingFunction = 'linear';
        rowRef.current.style.animationName = direction === 'right' ? 'moveRight' : 'moveLeft';
      }
    };

    animateRow(row1Ref, 'right');
    animateRow(row2Ref, 'left');
  }, []);

  const createRow = (start, end, ref, direction) => (
    <div ref={ref} className={`flex space-x-8 py-4 animate-move-${direction}`}>
      {[...skills, ...skills].slice(start, start + skills.length).map((skill, index) => (
        <div key={`${skill.name}-${index}`} className="flex flex-col items-center min-w-[100px]">
          {skill.icon ? 
            <skill.icon className="text-5xl mb-2" style={{ color: skill.color }} />
            :
            <span className="text-5xl mb-2" style={{ color: skill.color }}>?</span>
          }
          <span className="text-sm text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        {createRow(0, skills.length, row1Ref, 'right')}
        {createRow(Math.floor(skills.length / 2), skills.length + Math.floor(skills.length / 2), row2Ref, 'left')}
      </div>
      <style jsx>{`
        @keyframes moveLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes moveRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-move-left {
          display: flex;
          animation: moveLeft 30s linear infinite;
        }
        .animate-move-right {
          display: flex;
          animation: moveRight 30s linear infinite;
        }
      `}</style>
    </section>
  );
}