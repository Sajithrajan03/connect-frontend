import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ item, onClose, onSave, facultyOptions }) => {
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'Ongoing',
    type: 'Project',
    level: 'Easy', 
    faculty: '', 
    verified: 'Unverified', 
  });


  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || item.title || '',
        description: item.description || '',
        status: item.status || 'Ongoing',
        type: item.type || 'Project',
        level: item.level || 'Easy',
        faculty: item.faculty || '',
        verified: item.verified || 'Unverified',
      });
    }
  }, [item]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">
            {item ? 'Edit Item' : 'Add New Item'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
            >
              <option value="Project">Project</option>
              <option value="Paper">Paper</option>
              <option value="Extracurricular">Extracurricular</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {formData.type === 'Project' ? 'Project Name' : formData.type === 'Paper' ? 'Paper Title' : 'Activity Name'}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>

        
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Level
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>

        
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Faculty for Verification
            </label>
            <select
              name="faculty"
              value={formData.faculty}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
            >
              <option value="">Select Faculty</option>
              {facultyOptions.map((faculty, index) => (
                <option key={index} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
          </div>

         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Verification Status
            </label>
            <select
              name="verified"
              value={formData.verified}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
            >
              <option value="Verified">Verified</option>
              <option value="Unverified">Unverified</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
