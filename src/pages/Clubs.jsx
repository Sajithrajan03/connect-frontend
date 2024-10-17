import React from 'react';
import { Link } from 'react-router-dom';

const clubs = [
  {
    id: 1,
    name: 'AI Club',
    banner: 'https://via.placeholder.com/400x200',
    description: 'Explore AI and machine learning projects.',
  },
  {
    id: 2,
    name: 'Robotics Club',
    banner: 'https://via.placeholder.com/400x200',
    description: 'Build robots and participate in competitions.',
  },
  {
    id: 3,
    name: 'Coding Club',
    banner: 'https://via.placeholder.com/400x200',
    description: 'Improve your coding skills through challenges.',
  },
];

const Clubs = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Clubs</h1>
      </div>
      
      {clubs.length === 0 ? (
        <div className="text-center text-gray-500 text-xl mt-8">
          No clubs available at the moment. Check back later!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {clubs.map((club) => (
            <Link to={`/club/${club.id}`} key={club.id}>
              <div className="rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-white">
                <img
                  src={club.banner}
                  alt={club.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{club.name}</h2>
                  <p className="text-gray-600 mt-2">{club.description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Clubs;
