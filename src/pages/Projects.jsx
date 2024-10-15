import React, { useState, useEffect, useCallback } from "react";
import Modal from '../components/modal';
import b1 from '../assets/b1.jpeg'; // Replace this with the path to your image asset

// Updated projects data based on your new data structure
const projects = [
    {
        id: 1,
        name: 'AI Chatbot',
        description: 'A chatbot that uses AI to answer questions.',
        status: 'Ongoing',
        tags: ['AI/ML', 'Chatbot'],
        image: b1,
        about: "An AI-driven platform to optimize full stack development processes.",
        techStack: ['Python', 'TensorFlow', 'React'],
        prerequisites: ['Programming Knowledge', 'Machine Learning Fundamentals', 'Frontend Development'],
        members: ["Member 1", "Member 2"]
    },
    {
        id: 2,
        name: 'FullStack E-commerce App',
        description: 'An e-commerce application built with MERN stack.',
        status: 'Completed',
        tags: ['FullStack', 'MERN'],
        image: b1,
        about: "Developing a cloud-based web application for e-commerce.",
        techStack: ['React', 'Node.js', 'MongoDB'],
        prerequisites: ['FullStack Development', 'Frontend and Backend'],
        members: ["Member 3", "Member 4"]
    },
    {
        id: 3,
        name: "Project Three",
        image: "../public/black.jpeg",
        description: "Description for Project One",
        tags: ["FullStack"],
        status: "Ongoing",
        members: ["Member 5", "Member 6"],
        about: "Development of a full-stack application for online education platforms.",
        techStack: ["JavaScript", "React", "Node.js"],
        prerequisites: ["JavaScript Proficiency", "Frontend and Backend Development", "Database Management"]
      },
      {
        id: 4,
        name: "Project Four",
        image: "../public/black.jpeg",
        description: "Description for Project Two",
        tags: ["BlockChain", "FullStack"],
        status: "Completed",
        members: ["Member 7", "Member 8"],
        about: "Integrating blockchain technology into full-stack web applications.",
        techStack: ["Ethereum", "React", "Node.js"],
        prerequisites: ["Blockchain Concepts", "Ethereum", "Full Stack Development"]
      },
      {
        id: 5,
        name: "Project Five",
        image: b1,
        description: "Description for Project Five",
        tags: ["IoT", "Data Analysis"],
        status: "Ongoing",
        members: ["Member 5", "Member 6"],
        about: "A project focused on Internet of Things and data analysis to provide insights.",
        techStack: ["Python", "Raspberry Pi", "SQL"],
        prerequisites: ["Programming Knowledge", "Electronics Fundamentals", "Data Analysis"]
      },
      {
        id: 6,
        name: "Project Six",
        image: "../public/black.jpeg",
        description: "Description for Project Six",
        tags: ["Web Development", "Cloud"],
        status: "Completed",
        members: ["Member 7", "Member 8", "Member 9"],
        about: "Developing a cloud-based web application for storage solutions.",
        techStack: ["React", "AWS", "Node.js"],
        prerequisites: ["Frontend Development", "Backend Development", "Cloud Services"]
      },
      {
        id: 7,
        name: "Project Seven",
        image: "../public/black.jpeg",
        description: "Description for Project Seven",
        tags: ["Machine Learning", "AI"],
        status: "Ongoing",
        members: ["Member 10", "Member 11"],
        about: "Creating an AI model for predictive analytics in finance.",
        techStack: ["Python", "TensorFlow", "SciKit-Learn"],
        prerequisites: ["Machine Learning", "Python Programming", "Data Science"]
      },
      {
        id: 8,
        name: "Project Eight",
        image: b1,
        description: "Description for Project Eight",
        tags: ["Mobile App", "UX/UI"],
        status: "Completed",
        members: ["Member 12", "Member 13", "Member 14"],
        about: "Designing and developing a mobile app focused on enhancing user experience.",
        techStack: ["Flutter", "Dart", "Firebase"],
        prerequisites: ["Mobile Development", "UX/UI Design", "Database Management"]
      }
];

function ProjectSearchPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [statusFilter, setStatusFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    // Get all unique tags from projects
    const allTags = [...new Set(projects.flatMap((project) => project.tags))];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSearch = useCallback(() => {
        const filtered = projects.filter(
            (project) =>
                project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedTags.length === 0 ||
                    project.tags.some((tag) => selectedTags.includes(tag))) &&
                (statusFilter === "All" || project.status === statusFilter)
        );
        setFilteredProjects(filtered);
    }, [searchTerm, selectedTags, statusFilter]);

    useEffect(() => {
        handleSearch();
    }, [searchTerm, selectedTags, statusFilter, handleSearch]);

    const toggleTag = (tag) => {
        setSelectedTags((tags) =>
            tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]
        );
    };

    return (
        <div>
            <div className="container mx-auto p-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <div className="flex flex-col md:flex-col mb-4">
                        <h1 className="text-5xl font-semibold mb-4">Projects</h1>
                        <h3 className="text-xl">Search for all the Ongoing and Completed Projects</h3>
                    </div>
                    <img src="../public/projects.png" alt="Project" className="w-1/4 h-1/4" />
                </div>

                {/* Search Bar */}
                <div className="flex flex-col md:flex-row justify-between mb-4 items-center">
                    <input
                        type="text"
                        placeholder="Search for a project..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mt-1 block w-full md:w-1/3 px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-700 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ee5461] focus:border-[#ee5461]"
                    />
                    <div className="mt-2 md:mt-0 md:ml-4">
                        <select
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="block w-full md:w-48 text-gray-700 py-2 px-4 bg-white border border-gray-300 rounded-xl shadow hover:border-gray-400 focus:outline-none focus:ring focus:ring-[#ee5461] focus:border-[#ee5461] active:bg-gray-50 transition ease-in-out duration-150"
                            value={statusFilter}
                        >
                            <option value="All">All</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>

                {/* Tag Filter */}
                <div className="flex flex-wrap gap-5 mb-6 mt-6">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`px-4 py-2 rounded-xl ${
                                selectedTags.includes(tag)
                                    ? "bg-[#ee5461] text-white transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                                    : "bg-gray-200 text-gray-700 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Projects List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => openModal(project)}
                            className="transform transition duration-500 hover:scale-105 rounded overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-2xl"
                        >
                            <img
                                className="w-full h-48 object-cover"
                                src={project.image}
                                alt={project.name}
                            />
                            <div className="px-6 py-4">
                                <div className="flex justify-between">
                                    <div className="font-bold text-xl mb-2">{project.name}</div>
                                    <div
                                        className={`text-xs p-2 font-semibold rounded-full flex items-center justify-center ${
                                            project.status === "Ongoing"
                                                ? "bg-green-200 text-green-800 border-green-300 border"
                                                : "bg-blue-400 text-white border border-blue-300"
                                        }`}
                                    >
                                        {project.status}
                                    </div>
                                </div>
                                <p className="text-gray-700 text-base">{project.description}</p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {project.status === "Completed" ? (
                                    <button
                                        onClick={() => openModal(project)}
                                        className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold"
                                    >
                                        View More
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => openModal(project)}
                                        className="text-green-700 hover:text-green-900 text-sm font-semibold"
                                    >
                                        Apply
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Project Details */}
            <Modal isOpen={isModalOpen} close={closeModal}>
                {selectedProject && (
                    <div>
                        <div
                            className="bg-cover bg-center h-48 w-full rounded-xl"
                            style={{ backgroundImage: `url(${selectedProject.image})` }}
                        >
                            <div className="flex flex-col justify-end h-full p-4 bg-gradient-to-b from-transparent to-black">
                                <h2 className="text-3xl font-bold text-white mb-4 ml-4">
                                    {selectedProject.name}
                                </h2>
                                <div className="flex items-center justify-start space-x-2 ml-4">
                                    {selectedProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    <p
                                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white ${
                                            selectedProject.status === "Ongoing"
                                                ? "bg-green-400"
                                                : "bg-blue-400"
                                        }`}
                                    >
                                        {selectedProject.status}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            <h3 className="font-semibold text-lg">About</h3>
                            <p className="text-gray-600">{selectedProject.about}</p>

                            <h3 className="font-semibold text-lg">Tech Stack</h3>
                            <ul className="list-disc list-inside">
                                {selectedProject.techStack.map((tech) => (
                                    <li key={tech} className="text-gray-700">{tech}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold text-lg mt-4">Prerequisites</h3>
                            <ul className="list-disc list-inside">
                                {selectedProject.prerequisites.map((prereq) => (
                                    <li key={prereq} className="text-gray-700">{prereq}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold text-lg">Members</h3>
                            <ul className="list-disc list-inside">
                                {selectedProject.members.map((member) => (
                                    <li key={member} className="text-gray-700">{member}</li>
                                ))}
                            </ul>

                            {selectedProject.status === 'Ongoing' && (
                                <div className="text-right mt-4">
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl">
                                        Apply
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default ProjectSearchPage;
