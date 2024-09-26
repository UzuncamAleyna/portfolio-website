"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import projectsData from '../data/projectsData';


  const ProjectsSection = () => {
    const [tag, setTag] = useState('All');
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    return (
      <section id="my-work" className="text-white py-16">
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Work</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12'>
  {filteredProjects.map((project) => (
    <ProjectCard 
      key={project.id} 
      id={project.id}
      title={project.title} 
      description={project.description} 
      images={project.images}
      language={project.language}
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl}
      />
  ))}
</div>
      </section>
    );
  };
  
  export default ProjectsSection;