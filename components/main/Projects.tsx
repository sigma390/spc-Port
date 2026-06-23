import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div
      className='flex flex-col items-center justify-center py-20'
      id='projects'
    >
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src='/Gitpaers.png'
          title='Git Papers Hub '
          description='Paper Management System for Students. It is a web application that allows users to search for Previous Year papers. and view them in a user-friendly interface.'
          slug='git-papers-hub'
        />
        <ProjectCard
          src='/AnalyticsWeb.png'
          title='Analytics Company Website'
          description='A website for an analytics company that provides data-driven insights and solutions to help businesses make informed decisions and drive growth.'
          slug='analytics-company-website'
        />
        <ProjectCard
          src='/Spacw.png'
          title='Space themed Website'
          description='Explore my space-themed portfolio for a cosmic collection of innovative and boundary-pushing projects that defy gravity and showcase my out-of-this-world creativity.'
          slug='space-themed-website'
        />
      </div>
      <div className='mt-10 z-[20]'>
        <a
          href='/projects'
          className='py-3 px-6 button-primary text-center text-white rounded-lg cursor-pointer hover:scale-105 transition-all duration-150 relative inline-block'
        >
          See All Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
