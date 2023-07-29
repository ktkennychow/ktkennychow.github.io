import React from 'react'
import ProjectItem from './ProjectItem'
import projects from '../data/projects'

const Projects = () => (
  <div
    id='projects'
    className='flex flex-col gap-2.5 pt-10 max-w-3xl'>
    <h2 className='text-3xl font-semibold'>Projects</h2>
    <div className='flex flex-col gap-10'>
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
)

export default Projects
