import React, { useState, useEffect } from 'react';

const ProjectModal = ({ project = {}, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        prerequisites: '',
        mentor: '',
        tag: '',
        techStack: '',
        level: 'Medium',
        duration: '',
        status: 'Not Started',
        skills: '',
        maxTeamSize: '',
      });

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        description: project.description || '',
        prerequisites: project.prerequisites || '',
        mentor: project.mentor || '',
        tag: project.tag || '',
        techStack: project.techStack || '',
        level: project.level || 'Medium',
        duration: project.duration || '',
        status: project.status || 'Not Started',
        skills: project.skills || '',
        maxTeamSize: project.maxTeamSize || '',
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-lg p-8 w-2/5">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Project Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
      
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Prerequisites</label>
              <input
                type="text"
                name="prerequisites"
                value={formData.prerequisites}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Faculty Mentor</label>
              <input
                type="text"
                name="mentor"
                value={formData.mentor}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Tag</label>
              <input
                type="text"
                name="tag"
                value={formData.tag}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Tech Stack</label>
              <input
                type="text"
                name="techStack"
                value={formData.techStack}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

       
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Project Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Difficult">Difficult</option>
              </select>
            </div>
          </div>

          
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium">Project Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Skills Required</label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Maximum Team Size</label>
              <input
                type="number"
                name="maxTeamSize"
                value={formData.maxTeamSize}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
