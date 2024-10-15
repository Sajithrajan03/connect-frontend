import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ForumIcon from "@mui/icons-material/Forum";
import GroupIcon from "@mui/icons-material/Group";
import { FaProjectDiagram } from "react-icons/fa";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SupportIcon from "@mui/icons-material/Support";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen">
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden text-primary focus:outline-none"
      >
        {isOpen ? (
          <CloseIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>

      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out bg-white shadow-md w-64 z-30 flex flex-col justify-between`}
      >
        <div>
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <span className="font-bold text-xl text-primary">CONNECT</span>
            <button onClick={toggleSidebar} className="md:hidden">
              {isOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
          <nav className="mt-4">
            <ul>
              <li className="p-4 hover:bg-gray-100 flex items-center space-x-3">
                <HomeIcon />
                <Link to="/home" className="text-gray-700">
                  Home
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-100 flex items-center space-x-3">
                <ForumIcon />
                <Link to="/forums" className="text-gray-700">
                  Forums
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-100 flex items-center space-x-3">
                <FaProjectDiagram />
                <Link to="/myprojects" className="text-gray-700">
                  My Projects
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-100 flex items-center space-x-3">
                <GroupIcon />
                <Link to="/clubs" className="text-gray-700">
                  Clubs
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-100 flex items-center space-x-3">
                <AssignmentIcon />
                <Link to="/projects" className="text-gray-700">
                  Projects
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-100 flex items-center space-x-3">
                <SupportIcon />
                <Link to="/support" className="text-gray-700">
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Profile at the bottom */}
        <div className="p-4 border-t border-gray-200 flex items-center space-x-3">
          <PersonIcon />
          <Link to="/profile" className="text-gray-700">
            Profile
          </Link>
        </div>
      </div>

      <div className="ml-64 p-6">{/* Space left for main content */}</div>
    </div>
  );
};

export default Sidebar;
