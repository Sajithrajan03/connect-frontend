import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Dummy data for a club
const clubData = {
  id: 1,
  name: 'Idea Club',
  banner: 'https://via.placeholder.com/1200x300',
  logo: 'https://via.placeholder.com/100', // Club logo
  description: 'A club focused on AI and ML projects.',
  currentActivities: ['AI Chatbot', 'Image Recognition System'],
  pastActivities: ['AI Research Paper', 'ML Competition'],
  achievements: ['Won AI Hackathon', 'Best Research Paper Award'],
  members: ['John Doe', 'Jane Smith', 'Alice Johnson'],
};

const dummyBackendResponse = {
  currentActivities: {
      'AI Chatbot': 'https://form.jotform.com/242891641124455',
      'Image Recognition System': 'https://forms.gle/FABS2j71ruus1Jam9'
  }
};

const Modal = ({ showModal, closeModal, formUrl, project }) => {
  return (
      showModal ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full h-3/4 relative">
                  <h2 className="text-2xl font-bold mb-4">Apply for {project}</h2>
                  <iframe
                      src={formUrl}
                      title="Application Form"
                      className="w-full h-5/6 border border-gray-300 rounded-lg"
                  ></iframe>
                  <button
                      type="button"
                      onClick={closeModal}
                      className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
                  >
                      X
                  </button>
              </div>
          </div>
      ) : null
  );
};


// ClubView component
const ClubView = () => {
  const { id } = useParams();
  const club = clubData; // This would be fetched dynamically later

  // Navigation state for switching between sections
  const [activeSection, setActiveSection] = useState('Current Activities');
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [formUrl, setFormUrl] = useState('');

  const openModal = (project) => {
    const fetchedUrl = dummyBackendResponse.currentActivities[project] || 'https://www.example.com/dummy-form';
    setFormUrl(fetchedUrl);
    setSelectedProject(project);
    setShowModal(true);
};

const closeModal = () => {
    setShowModal(false);
    setSelectedProject('');
    setFormUrl('');
};


const renderSection = () => {
  switch (activeSection) {
      case 'Current Activities':
          return (
              <div className="space-y-4">
                  {club.currentActivities.map((project, index) => (
                      <div
                          key={index}
                          className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform border border-gray-200"
                          onClick={() => openModal(project)}
                      >
                          <h3 className="text-lg font-semibold text-blue-700">{project}</h3>
                          <p className="text-gray-600 mt-2">Click to apply for this project.</p>
                      </div>
                  ))}
              </div>
          );
          case 'Past Activities':
            return (
                <div className="space-y-4">
                    {club.pastActivities.map((project, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform border border-gray-200"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{project}</h3>
                            <p className="text-gray-500 mt-2">Click to view the details of this past project.</p>
                        </a>
                    ))}
                </div>
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
      {/* Modal */}
      <Modal showModal={showModal} closeModal={closeModal} formUrl={formUrl} project={selectedProject} />

      {/* Banner with logo and title */}
      <div className="relative w-full h-60 bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${club.banner})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
          <div className="absolute bottom-4 left-6 flex items-center">
              <img
                  src={club.logo}
                  alt={club.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              <div className="ml-4 p-4 bg-black bg-opacity-70 rounded-lg animate-fade-in">
                  <h1 className="text-4xl font-bold text-white">{club.name}</h1>
                  <p className="text-lg text-white mt-1">{club.description}</p>
              </div>
          </div>
      </div>

      {/* Sticky navigation bar */}
      <div className="sticky top-0 bg-white shadow-md z-10 mt-8">
          <div className="flex justify-center space-x-6 py-3">
              {['Current Activities', 'Past Activities', 'Achievements', 'Members'].map((section) => (
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