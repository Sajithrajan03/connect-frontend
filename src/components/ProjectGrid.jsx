import React from 'react';
import ProjectTile from './ProjectTile';

const ProjectGrid = () => {
  const projects = [
    { title: 'AI Research', description: 'Exploring AI in education.' },
    { title: 'Web Development', description: 'Building a student platform.' },
    { title: 'Data Science', description: 'Analyzing university data.' },
    // Add more projects as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
      {projects.map((project, index) => (
        <ProjectTile key={index} title={project.title} description={project.description} />
      ))}
    </div>
  );
};

export default ProjectGrid;
