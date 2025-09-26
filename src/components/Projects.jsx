import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../data/projects';

const Projects = () => {
  if (projects.length === 0) {
    return null;
  }
  
  return (
    <div id='projects' className='flex h-full flex-col'>
      <h2 className='text-md font-semibold'>Projects</h2>
      <div className='mt-5 flex flex-wrap gap-5'>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            stack={project.stack}
            github={project.github}
            website={project.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
