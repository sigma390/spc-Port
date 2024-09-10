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
        />
        <ProjectCard
          src='/AnalyticsWeb.png'
          title='Analytics Company Website'
          description='A website for an analytics company that provides data-driven insights and solutions to help businesses make informed decisions and drive growth.'
        />
        <ProjectCard
          src='/Spacw.png'
          title='Space themed Website'
          description='Explore my space-themed portfolio for a cosmic collection of innovative and boundary-pushing projects that defy gravity and showcase my out-of-this-world creativity.'
        />
      </div>
      <h1>
        <a href=''>See All Projects</a>
      </h1>
    </div>
  );
};

export default Projects;
