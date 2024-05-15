import {forwardRef, ReactNode} from "react";
import {Terminal} from "lucide-react";

import csharp from '/icons/c-sharp.png';
import _html from '/icons/html.png';
import Java from '/icons/java.png';
import JavaScript from '/icons/javascript.png';
import Python from '/icons/python.png';
import SQL from '/icons/sql.png';
import TypeScript from '/icons/typescript.png';

import react from '/icons/react.png';
import next from '/icons/nextjs.png';
import express from '/icons/express.png';
import tailwind from '/icons/tailwind.png';
import dotnet from '/icons/dot-net.png';
import unity from '/icons/unity.png';

import git from '/icons/git.png';
import github from '/icons/github-mark-white.png';
import database from '/icons/database.png';
import docker from '/icons/docker.png';
import ci from '/icons/jenkins.png';

interface SkillSectionProps {
  title: string;
  items: { label: string, icon?: ReactNode }[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, items }) => {
  return (
    <div className='relative max-w-[20em]'>
      <div className='bg-white h-full p-2 z-10 relative'>
        <h2 className='text md:text-xl text-purple-200'>{title}</h2>
        <ul>
          {items.map((item, index) => (
            <SkillItem key={index} label={item.label} icon={item.icon}/>
          ))}
        </ul>
      </div>
      <div
        className={`absolute left-1.5 top-1.5 h-full w-full z-0 bg-gradient-to-r from-blue-400 to-red-400 via-purple-400 via-20%`}/>
    </div>
  );
};

interface SkillItemProps {
  label: string;
  icon: ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({label, icon = <Terminal className='w-8 h-8' /> }) => {
  return (
    <li className='flex p-1 gap-3 text md:text-lg  text-black'>
      {icon}
      {label}
    </li>
  );
};


interface EducationSectionProps {
  title: string;
  institution: string;
  duration: string;
  description: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({ title, institution, duration, description }) => {
  return (
    <div className='relative max-w-[20em]'>
      <div className='left-0 top-0 border relative bg-white z-10'>
        <h2 className='text md:text-xl text-black'>{title}</h2>
        <h3 className='text-sm md:text-lg text-purple-200'>{institution}</h3>
        <p className='text-sm md:text-md text-purple-200'>{duration}</p>
        <p className='text-sm md:text-md text-purple-200'>{description}</p>
      </div>
      <div className={`absolute left-1.5 top-1.5 h-full w-full z-0 bg-gradient-to-r from-blue-400 to-red-400 via-purple-400 via-20%`} />
    </div>
  );
};

const Skills = forwardRef<HTMLDivElement>(function Skills(_props, ref) {

  const technicalExpertise = [
    { label: 'Fullstack Development' },
    { label: 'Frontend Development' },
    { label: 'Backend Development' },
    { label: 'Software Architecture & Design' },
    { label: 'DevOps' },
    { label: 'Cloud Computing' },
    { label: 'Project Management' }]

  const languages = [
    { label: 'JavaScript', icon: <img src={JavaScript} alt='JavaScript' className='h-8'/> },
{ label: 'TypeScript', icon: <img src={TypeScript} alt='TypeScript' className='h-8'/> },
    { label: 'Python', icon: <img src={Python} alt='Python' className='h-8'/> },
    { label: 'Java', icon: <img src={Java} alt='Java' className='h-8'/> },
    { label: 'C#', icon: <img src={csharp} alt='C#' className='h-8'/> },
    { label: 'SQL', icon: <img src={SQL} alt='SQL' className='h-8'/> },
    { label: 'HTML/CSS', icon: <img src={_html} alt='HTML/CSS' className='h-8'/> }]

  const frameworks = [
    { label: 'React.js', icon: <img src={react} alt='React.js' className='h-8'/> },
    { label: 'Next.js', icon: <img src={next} alt='Next.js' className='h-8'/> },
    { label: 'express.js', icon: <img src={express} alt='express.js' className='h-5'/> },
    { label: 'TailwindCSS', icon: <img src={tailwind} alt='TailwindCSS' className='h-5'/> },
    { label: '.NET Core', icon: <img src={dotnet} alt='.NET Core' className='h-3'/> },
    { label: 'Unity3D', icon: <img src={unity} alt='Unity3D' className='h-8'/> }
  ]

  const tools = [
    { label: 'Git', icon: <img src={git} alt='Git' className='h-8'/> },
    { label: 'GitHub', icon: <img src={github} alt='GitHub' className='h-7 invert'/> },
    { label: 'PostgreSQL | MySQL | SQLite', icon: <img src={database} alt='Databases' className='h-8'/> },
    { label: 'Docker', icon: <img src={docker} alt='Docker' className='h-5'/> },
    { label: 'CI/CD', icon: <img src={ci} alt='CI/CD' className='h-8'/> }
  ]

  const educationEntries = [
    {
      title: 'Master of Engineering in Software Engineering',
      institution: 'Concordia University',
      duration: '2022 - 2024',
      description: 'GPA: 4.07/4.30'
    },
    {
      title: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Lebanese American University',
      duration: '2017 - 2022',
      description: 'GPA: 3.93/4.00'
    }

  ];


  return (
    <div className="flex flex-col items-center justify-center md:h-full left-0 right-0 md:w-[40em] mx-auto"
         ref={ref}>
      <h1 className='text-4xl md:text-5xl text-white font-mono mr-auto'>Education</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mr-auto relative'>
        {educationEntries.map((entry, index) => (
          <EducationSection key={index} title={entry.title} institution={entry.institution} duration={entry.duration}
                            description={entry.description}/>
        ))}
      </div>
      <h1 className='text-4xl md:text-5xl text-white mt-2 font-mono mr-auto'>Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mr-auto relative'>
        <SkillSection title={"Programming Languages"} items={languages}/>
        <SkillSection title={"Technical Expertise"} items={technicalExpertise}/>
        <SkillSection title="Frameworks & Libraries" items={frameworks}/>
        <SkillSection title="Tools & Technologies" items={tools}/>
      </div>
    </div>
  );
})


export {Skills}