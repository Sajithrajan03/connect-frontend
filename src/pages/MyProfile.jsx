import { IoIosDocument } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
import { useState } from "react";
export default function MyProfile() {
  const [selectedTab, setSelectedTab] = useState("PROJECTS");

  const data = {
    PROJECTS: [
      "Project A - A web app built using React and Node.js",
      "Project B - An Android app for task management",
      "Project C - A machine learning model for image classification",
    ],
    ACHIEVEMENTS: [
      "1st place in the National Coding Competition",
      "Employee of the Month at XYZ Corp",
      "Best Innovative Project Award 2022",
    ],
    CERTIFICATIONS: [
      "AWS Certified Solutions Architect",
      "Google Data Engineer Certification",
      "Certified Kubernetes Administrator",
    ],
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="text-4xl font-bold">My Profile</div>
      <div className="grid grid-cols-3 mt-4 items-center">
        <div className="col-span-1">
          <img
            className="h-[300px]"
            src="./defaultProfile.jpg"
            alt="defaultProfilepic"
          />
        </div>
        <div className="col-span-2 flex-col flex divide-y-2 w-fit border p-4 rounded-lg shadow-lg gap-4">
          <div className="flex gap-4">
            <div className="font-bold">Name</div>
            <div className="text-black">Robert Evans</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Roll No</div>
            <div className="text-black">CB.EN.U4CSE21347</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Branch</div>
            <div className="text-black">Computer Science</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Course</div>
            <div className="text-black">B Tech</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">College</div>
            <div className="text-black">CET</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Semester</div>
            <div className="text-black">8</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Passed Out Year</div>
            <div className="text-black">2022</div>
          </div>
          <div className="flex gap-4">
            <div className="font-bold">Career Path</div>
            <div className="text-black">Software Engineer</div>
          </div>
        </div>
      </div>
      <div className="text-3xl mt-12">Resumes</div>
      <div className="text-slate-500">Default resume is orange in color</div>
      <div className="flex gap-4">
        <button className="flex p-4 mt-4 items-center gap-4 border-orange-400 border-2 shadow-l rounded-2xl">
          <IoIosDocument size={20} />
          <div className="mr-16 flex flex-col">
            <div className="text-l">Resume</div>
            <div className="text-xs text-slate-600">31 Oct 2024</div>
          </div>
          <FaDownload size={20} />
        </button>
        <button className="mt-4 px-4 py-2 bg-slate-400 text-white rounded-md hover:bg-slate-600 transition-all duration-300">
          +
        </button>
      </div>
      <div className="flex gap-8 mt-16 divide-x-4">
        <div
          className={`cursor-pointer ${
            selectedTab === "PROJECTS" ? "font-bold" : ""
          } hover:underline underline-offset-4`}
          onClick={() => setSelectedTab("PROJECTS")}
        >
          PROJECTS
        </div>
        <div
          className={`cursor-pointer pl-8 ${
            selectedTab === "ACHIEVEMENTS" ? "font-bold" : ""
          } hover:underline underline-offset-4`}
          onClick={() => setSelectedTab("ACHIEVEMENTS")}
        >
          ACHIEVEMENTS
        </div>
        <div
          className={`cursor-pointer pl-8 ${
            selectedTab === "CERTIFICATIONS" ? "font-bold" : ""
          } hover:underline underline-offset-4`}
          onClick={() => setSelectedTab("CERTIFICATIONS")}
        >
          CERTIFICATIONS
        </div>
      </div>

      {/* Display list based on the selected tab */}
      <div className="mt-8 text-black">
        <ul className="list-disc list-inside">
          {data[selectedTab].map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
