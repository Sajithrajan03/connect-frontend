import React from 'react';
import { tagColors } from '../utils/colors'; 

const ProjectTileBig = ({ project }) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden relative transition-transform transform hover:scale-105">
          <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
          <div className="absolute top-2 left-2 flex flex-wrap">
            {project.tags.map((tag, index) => (
              <span key={index} className={`bg-gray-900 text-white text-xs font-medium mr-1 px-2.5 py-0.5 rounded`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded">
            {project.status}
          </div>
          <button className="absolute bottom-2 right-2 text-blue-600 underline">Show More</button>
        </div>
      );
    };

export default ProjectTileBig;
