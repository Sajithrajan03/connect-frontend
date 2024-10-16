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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
  
      <div className="flex items-center justify-between bg-white shadow-md p-4">
        <div className="flex items-center">
          <span className="font-bold text-xl text-primary mr-4">CONNECT</span>
        </div>

       
        <button
          onClick={toggleNavbar}
          className="md:hidden text-primary focus:outline-none"
        >
          {isOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>

      
        <div className={`hidden md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link to="/home" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link to="/faculty" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
            <HomeIcon />
            <span>Home2</span>
          </Link>
          <Link to="/forums" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
            <ForumIcon />
            <span>Forums</span>
          </Link>
          <Link to="/myprojects" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
            <FaProjectDiagram />
            <span>My Projects</span>
          </Link>
          <Link to="/clubs" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
            <GroupIcon />
            <span>Clubs</span>
          </Link>
          <Link to="/projects" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
            <AssignmentIcon />
            <span>Projects</span>
          </Link>
          {/* <Link to="/support" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
            <SupportIcon />
            <span>Support</span>
          </Link> */}
          <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
            <PersonIcon />
            <span>Profile</span>
          </Link>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/home" className="flex items-center space-x-2 text-gray-700 hover:text-primary" onClick={toggleNavbar}>
              <HomeIcon />
              <span>Home</span>
            </Link>
            <Link to="/forums" className="flex items-center space-x-2 text-gray-700 hover:text-primary" onClick={toggleNavbar}>
              <ForumIcon />
              <span>Forums</span>
            </Link>
            <Link to="/myprojects" className="flex items-center space-x-2 text-gray-700 hover:text-primary" onClick={toggleNavbar}>
              <FaProjectDiagram />
              <span>My Projects</span>
            </Link>
            <Link to="/clubs" className="flex items-center space-x-2 text-gray-700 hover:text-primary" onClick={toggleNavbar}>
              <GroupIcon />
              <span>Clubs</span>
            </Link>
            <Link to="/projects" className="flex items-center space-x-2 text-gray-700 hover:text-primary" onClick={toggleNavbar}>
              <AssignmentIcon />
              <span>Projects</span>
            </Link>
            <Link to="/support" className="flex items-center space-x-2 text-gray-700 hover:text-primary" onClick={toggleNavbar}>
              <SupportIcon />
              <span>Support</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-primary" onClick={toggleNavbar}>
              <PersonIcon />
              <span>Profile</span>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
