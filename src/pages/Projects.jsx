// pages/Projects.jsx
import React, { useState } from 'react';
import ProjectTileBig from '../components/ProjectTileBig';
import b1 from '../assets/b1.jpeg';
import { tagColors } from '../utils/colors'; // Adjust the import based on your folder structure

const projectsData = [
    {
        id: 1,
        title: 'AI Chatbot',
        description: 'A chatbot that uses AI to answer questions.',
        status: 'Ongoing',
        tags: ['AI/ML', 'Chatbot'],
        thumbnail: b1,
    },
    {
        id: 2,
        title: 'FullStack E-commerce App',
        description: 'An e-commerce application built with MERN stack.',
        status: 'Completed',
        tags: ['FullStack', 'MERN'],
        thumbnail: b1,
    },
    {
        id: 3,
        title: 'Embedded System for Home Automation',
        description: 'A project focused on home automation using embedded systems.',
        status: 'Ongoing',
        tags: ['Embedded', 'IoT'],
        thumbnail: b1,
    },
    // Add more projects as needed
];

const statusColors = {
    'Ongoing': { light: 'bg-green-200', dark: 'bg-green-600', text: 'text-green-600' },
    'Completed': { light: 'bg-red-200', dark: 'bg-red-600', text: 'text-red-600' },
};

const Projects = () => {
    const [showMyProjects, setShowMyProjects] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState([]);

    const allTags = Object.keys(tagColors);
    const statusOptions = ['Ongoing', 'Completed'];

    const handleTagChange = (tag) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    };

    const handleStatusChange = (status) => {
        setSelectedStatus((prevStatus) =>
            prevStatus.includes(status) ? prevStatus.filter((s) => s !== status) : [...prevStatus, status]
        );
    };

    const filteredProjects = projectsData.filter((project) => {
        const matchesQuery = project.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag));
        const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(project.status);
        return matchesQuery && matchesTags && (!showMyProjects || project.status === 'Ongoing') && matchesStatus;
    });

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between mb-4">
                <h1 className="text-2xl font-bold">Projects</h1>
                <label className="flex items-center cursor-pointer">
                    <span className="mr-2">My Projects</span>
                    <input
                        type="checkbox"
                        checked={showMyProjects}
                        onChange={() => setShowMyProjects(!showMyProjects)}
                        className="toggle-checkbox hidden"
                    />
                    <span className="toggle-label block bg-gray-300 w-12 h-6 rounded-full"></span>
                </label>
            </div>

            {/* Search Bar */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                />
            </div>

            {/* Tag Filter */}
            <div className="mb-4 flex flex-wrap">
                {allTags.map((tag) => (
                    <div
                        key={tag}
                        className={`cursor-pointer mr-2 mb-2 rounded-lg p-2 transition duration-200 
                ${selectedTags.includes(tag) ? tagColors[tag].dark : tagColors[tag].light}`}
                        onClick={() => handleTagChange(tag)}
                    >
                        <span className={selectedTags.includes(tag) ? 'text-white' : tagColors[tag].text}>
                            {tag}
                        </span>
                    </div>
                ))}
            </div>

            {/* Status Filter */}
            <div className="mb-4 flex flex-wrap">
                {statusOptions.map((status) => (
                    <div
                        key={status}
                        className={`cursor-pointer mr-2 mb-2 rounded-lg p-2 transition duration-200 
        ${selectedStatus.includes(status) ? statusColors[status].dark + ' text-white' : statusColors[status].light + ' ' + statusColors[status].text}`}
                        onClick={() => handleStatusChange(status)}
                    >
                        {status}
                    </div>
                ))}
            </div>


            {/* Project Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project) => (
                    <ProjectTileBig key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
