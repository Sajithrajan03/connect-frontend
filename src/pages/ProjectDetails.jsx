import React, { useState } from "react";
import b1 from "../assets/b1.jpeg";


import { FaReact, FaNodeJs, FaEye, FaEdit } from "react-icons/fa";
import { TbProgressBolt } from "react-icons/tb";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

import Progress from "../components/Progress";
import Resources from "../components/Resources";

export default function ProjectDetails() {
  const [activeTab, setActiveTab] = useState("Overview");


  const sampleProjectData = {
    title: "AI Research",
    description: "Exploring AI in education.",
    bannerImage: b1, 
    mentor: "Timothy",
    prerequisites: "Basic understanding of AI and Machine Learning",
    techStack: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "NodeJS", icon: <FaNodeJs /> },
    ],
    members: [
      {
        name: "John Doe",
        role: "Frontend Developer",
        img: "https://via.placeholder.com/50",
      },
      {
        name: "Jane Smith",
        role: "Backend Developer",
        img: "https://via.placeholder.com/50",
      },
    ],
  };

  const sampleProgressData = {
    percentage: 70,
    currentMilestone: 3,
    totalMilestones: 5,
    milestones: [
      "Setup Project",
      "Develop Backend",
      "Integrate Frontend",
      "User Testing",
      "Final Deployment",
    ],
  };

  const sampleResourcesData = [
    "Project Documentation",
    "GitHub Repository",
    "Related Research Papers",
    "Tutorial Videos",
  ];


  const {
    title = "Project Title",
    description = "Project description goes here.",
    bannerImage = b1,
    mentor = "Mentor Name",
    prerequisites = "None",
    techStack = [],
    members = [],
  } = sampleProjectData;

  return (
    <div className="container mx-auto py-10">
     
      <div
        className="h-[500px] rounded-2xl shadow-2xl mb-10 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage || b1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5), rgba(0,0,0,0.3), transparent)",
          }}
        ></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-4 max-w-2xl">{description}</p>
        </div>
      </div>

     
      <div className="flex justify-center space-x-6 mb-8">
        {["Overview", "Progress", "Resources"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md text-lg font-semibold ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

   
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-white rounded-lg shadow-lg"
      >
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2 flex flex-col gap-6">
              <div>
                <h4 className="font-semibold text-xl text-gray-800">
                  Project Mentor
                </h4>
                <p className="text-gray-600">{mentor}</p>
              </div>
              <div>
                <h4 className="font-semibold text-xl text-gray-800">
                  Prerequisites
                </h4>
                <p className="text-gray-600">{prerequisites}</p>
              </div>
              <div>
                <h4 className="font-semibold text-xl text-gray-800">
                  Tech Stack
                </h4>
                <div className="flex gap-4 flex-wrap mt-2">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex gap-2 items-center bg-slate-200 text-gray-700 p-2 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                    >
                      {tech.icon}
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold text-xl text-gray-800">
                  Project Members
                  <button className="ml-4 text-sm text-blue-600 hover:underline">
                    <FaEdit /> Manage Team
                  </button>
                </h4>
                <ul className="mt-4 space-y-4">
                  {members.map((member) => (
                    <li key={member.name} className="flex items-center gap-4">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">
                          {member.name}
                        </p>
                        <p className="text-gray-500 text-sm">{member.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Progress" && <Progress progressData={sampleProgressData} />}
        {activeTab === "Resources" && <Resources resourcesData={sampleResourcesData} />}
      </motion.div>
    </div>
  );
}
