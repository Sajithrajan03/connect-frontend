import { useState } from "react";
import PersonalProjectTile from "../components/PersonalProjectTile";
import ProjectModal from "../components/ProjectModal";

export default function MyProjects() {
  const [projects, setProjects] = useState([
    { title: "AI Research", description: "Exploring AI in education." },
    { title: "Web Development", description: "Building a student platform." },
    { title: "Data Science", description: "Analyzing university data." },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editProject, setEditProject] = useState(null);

  const handleSaveProject = (projectData) => {
    if (editProject) {
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.title === editProject.title ? projectData : project
        )
      );
    } else {
      setProjects([...projects, projectData]);
    }
    setShowModal(false);
    setEditProject(null);
  };

  const handleEditProject = (project) => {
    setEditProject(project);
    setShowModal(true);
  };

  const handleDeleteProject = (title) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.title !== title)
    );
  };

  return (
    <div className="container mx-auto py-6">
      <div className="p-6 flex justify-between items-center bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg mb-8">
        <div className="text-4xl font-bold text-gray-800">My Projects</div>
        <button
          onClick={() => {
            setEditProject(null);
            setShowModal(true);
          }}
          className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          + Add New Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center text-gray-500 text-xl mt-8">
          No projects found. Click "Add New Project" to start creating!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {projects.map((project, index) => (
            <PersonalProjectTile
              key={index}
              title={project.title}
              description={project.description}
              onEdit={() => handleEditProject(project)}
              onDelete={() => handleDeleteProject(project.title)}
            />
          ))}
        </div>
      )}

      {showModal && (
        <ProjectModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveProject}
          project={editProject}
        />
      )}
    </div>
  );
}
