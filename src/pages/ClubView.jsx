import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Dummy data for a club
const clubData = {
    id: 1,
    name: 'Idea Club',
    banner: 'https://via.placeholder.com/1200x300',
    logo: 'https://via.placeholder.com/100', // Club logo
    description: 'A club focused on AI and ML projects.',
    activeProjects: ['AI Chatbot', 'Image Recognition System'],
    pastProjects: ['AI Research Paper', 'ML Competition'],
    achievements: ['Won AI Hackathon', 'Best Research Paper Award'],
    members: ['John Doe', 'Jane Smith', 'Alice Johnson'],
};

// ClubView component
const ClubView = () => {
    const { id } = useParams();
    const club = clubData; // This would be fetched dynamically later

    // Navigation state for switching between sections
    const [activeSection, setActiveSection] = useState('Active Projects');

    const renderSection = () => {
        switch (activeSection) {
            case 'Active Projects':
                return (
                    <ul className="list-disc list-inside">
                        {club.activeProjects.map((project, index) => (
                            <li key={index} className="text-gray-700">{project}</li>
                        ))}
                    </ul>
                );
            case 'Past Projects':
                return (
                    <ul className="list-disc list-inside">
                        {club.pastProjects.map((project, index) => (
                            <li key={index} className="text-gray-700">{project}</li>
                        ))}
                    </ul>
                );
            case 'Achievements':
                return (
                    <ul className="list-disc list-inside">
                        {club.achievements.map((achievement, index) => (
                            <li key={index} className="text-gray-700">{achievement}</li>
                        ))}
                    </ul>
                );
            case 'Members':
                return (
                    <ul className="list-disc list-inside">
                        {club.members.map((member, index) => (
                            <li key={index} className="text-gray-700">{member}</li>
                        ))}
                    </ul>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto p-6 relative">
        {/* Banner with logo and title */}
        <div className="relative w-full h-60 bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${club.banner})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-4 left-6 flex items-center">
            <img
              src={club.logo}
              alt={club.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
            <div className="ml-4 p-4 bg-black bg-opacity-60 rounded-lg animate-fade-in">
              <h1 className="text-4xl font-bold text-white">{club.name}</h1>
              <p className="text-lg text-white mt-1">{club.description}</p>
            </div>
          </div>
        </div>
      
        {/* Sticky navigation bar */}
        <div className="sticky top-0 bg-white shadow-md z-10 mt-8">
          <div className="flex justify-center space-x-6 py-3">
            {['Active Projects', 'Past Projects', 'Achievements', 'Members'].map((section) => (
              <button
                key={section}
                className={`text-lg font-semibold px-4 py-2 border-b-4 ${activeSection === section
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-600'
                  } transition duration-200`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      
        {/* Content section */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          {renderSection()}
        </div>
      </div>
      
    );
};

export default ClubView;
