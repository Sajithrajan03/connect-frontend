import React from "react";
import { Link } from "react-router-dom";

const PersonalProjectTile = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <Link to={"/projectDetails"}>
        <button className="mt-4 px-4 py-2 bg-accentBlue text-white rounded-md hover:bg-blue-500 transition-all duration-300">
          View Project
        </button>
      </Link>
    </div>
  );
};

export default PersonalProjectTile;
