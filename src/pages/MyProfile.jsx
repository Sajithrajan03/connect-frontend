import { IoIosDocument } from "react-icons/io";
import { FaDownload, FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal"; 
import PerformanceOverview from '../components/PerformanceOverview';

export default function MyProfile() {
  const [selectedTab, setSelectedTab] = useState("PROJECTS");
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

 
  const data = {
    PROJECTS: [
      { id: 1, name: "Sony Project", description: "A web app built using React and Node.js", status: "Completed", level: "Medium", verified: "Verified", faculty: "Dr. Ritwik M" },
      { id: 2, name: "PiSave", description: "An Android app for task management", status: "Ongoing", level: "Easy", verified: "Unverified", faculty: "" },
      { id: 3, name: "Library Management", description: "A machine learning model for image classification", status: "Dropped", level: "Difficult", verified: "Unverified", faculty: "" },
    ],
    PAPERS: [
      { id: 1, title: "Research Paper A", status: "Published", verified: "Verified", faculty: "Prof. Anisha" },
      { id: 2, title: "Research Paper B", status: "Ongoing", verified: "Unverified", faculty: "" },
    ],
    EXTRACURRICULAR: [
      { id: 1, activity: "Hackathon", description: "Participated in XYZ Hackathon" },
      { id: 2, activity: "Workshop", description: "Completed a workshop on AI" },
    ],
  };

  // Handle edit button click
  const handleEdit = (item) => {
    setEditItem(item);
    setShowModal(true);
  };


  const handleDelete = (id, type) => {
    
    console.log("Delete", id, type);
  };


  const handleAddNew = () => {
    setEditItem(null);
    setShowModal(true);
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-lg">
      <div className="text-4xl font-extrabold text-blue-800 mb-6">My Profile</div>
      <div className="grid grid-cols-3 mt-4 items-center gap-6">
  <div className="col-span-1 flex justify-center">
    <img
      className="h-[300px] w-[300px] rounded-full object-cover border-4 border-blue-300 shadow-xl"
      src="./defaultProfile.jpg"
      alt="defaultProfilepic"
    />
  </div>

  <div className="col-span-2 flex justify-between items-start w-full p-6 rounded-lg shadow-lg bg-white to-blue-50 border border-gray-200">
    
    <div className="space-y-4 w-1/2">
      <div className="text-2xl font-bold text-blue-800 mb-4">Profile Information</div>
      <ProfileInfo label="Name" value="Sajith Rajan" />
      <ProfileInfo label="Roll No" value="CB.EN.U4CSE21052" />
      <ProfileInfo label="Branch" value="Computer Science" />
      <ProfileInfo label="Course" value="B Tech" />
      <ProfileInfo label="College" value="Amrita Vishwa Vidhyapeetham" />
      <ProfileInfo label="Semester" value="7" />
      <ProfileInfo label="Passed Out Year" value="2025" />
      <ProfileInfo label="Career Path" value="Software Engineer" />
    </div>

   
    <div className="w-1/2 ml-6">
      <PerformanceOverview />
    </div>
  </div>
</div>


      <div className="flex gap-8 mt-12 text-xl font-semibold text-gray-600">
        <TabOption label="PROJECTS" selected={selectedTab === "PROJECTS"} onClick={() => setSelectedTab("PROJECTS")} />
        <TabOption label="PAPERS" selected={selectedTab === "PAPERS"} onClick={() => setSelectedTab("PAPERS")} />
        <TabOption label="EXTRACURRICULAR" selected={selectedTab === "EXTRACURRICULAR"} onClick={() => setSelectedTab("EXTRACURRICULAR")} />
      </div>

      <div className="mt-8 space-y-6">
        {data[selectedTab]?.map((item) => (
          <div
          key={item.id}
          className={`flex justify-between items-center p-6 rounded-lg border-2 shadow-lg hover:shadow-2xl transition-shadow ${
            item.level === "Easy"
              ? "bg-green-50 border-green-200"
              : item.level === "Medium"
              ? "bg-yellow-50 border-yellow-200"
              : "bg-red-50 border-red-200"
          }`}
        >
          <div className="space-y-2">
            {selectedTab === "PROJECTS" && (
              <>
                <p className="text-xl font-bold text-blue-800">{item.name}</p>
                <p className="text-gray-700">
                  {item.description} <span className="font-semibold">({item.status})</span>
                </p>
                <p className="text-sm text-gray-600 flex items-center space-x-1">
                  <span className="font-medium">Level:</span> 
                  <span className="flex items-center">
                    {item.level} 
                  </span>
                  &nbsp;|&nbsp;
                  <span className="font-medium">Verified:</span>
                  <span
                    className={`flex items-center ml-1 ${
                      item.verified === "Verified" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.verified === "Verified" ? (
                      <>
                        <span className="text-green-500">✔</span> 
                        <span className="ml-1">{item.verified}</span>
                      </>
                    ) : (
                      item.verified
                    )}
                  </span>
                  &nbsp;|&nbsp;
                  <span className="font-medium">Faculty:</span> {item.faculty || "N/A"}
                </p>
              </>
            )}
            {selectedTab === "PAPERS" && (
              <>
                <p className="text-xl font-bold text-blue-800">{item.title}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Status:</span> {item.status} &nbsp;|&nbsp;
                  <span className="font-medium">Verified:</span>
                  <span
                    className={`flex items-center ml-1 ${
                      item.verified === "Verified" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.verified === "Verified" ? (
                      <>
                        <span className="text-green-500">✔</span> 
                        <span className="ml-1">{item.verified}</span>
                      </>
                    ) : (
                      item.verified
                    )}
                  </span>
                  &nbsp;|&nbsp;
                  <span className="font-medium">Faculty:</span> {item.faculty || "N/A"}
                </p>
              </>
            )}
            {selectedTab === "EXTRACURRICULAR" && (
              <div>
                <p className="text-xl font-bold text-blue-800">{item.activity}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleEdit(item)}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaEdit size={18} />
            </button>
            <button
              onClick={() => handleDelete(item.id, selectedTab)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              <FaTrashAlt size={18} />
            </button>
          </div>
        </div>
        
        ))}
        <button onClick={handleAddNew} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg hover:shadow-xl transition-shadow">
          <FaPlus /> Add New
        </button>
      </div>

      {showModal && (
        <Modal
          item={editItem}
          onClose={() => setShowModal(false)}
          onSave={() => setShowModal(false)}
          facultyOptions={["Dr. Vidhya Balasubhramnyam", "Prof. Anisha ", "Dr. Ritwik M"]} 
        />
      )}
    </div>
  );
}

const ProfileInfo = ({ label, value }) => (
  <div className="flex gap-4">
    <div className="font-semibold text-gray-700">{label}</div>
    <div className="text-gray-800">{value}</div>
  </div>
);

const TabOption = ({ label, selected, onClick }) => (
  <div
    className={`cursor-pointer ${selected ? "font-bold text-blue-700 border-b-2 border-blue-700" : "hover:text-blue-500"}`}
    onClick={onClick}
  >
    {label}
  </div>
);
