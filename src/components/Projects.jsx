import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../data/projects';

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col'>
      <h2 className='text-md font-semibold'>Projects</h2>
      <div className='flex flex-wrap gap-2'>
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
