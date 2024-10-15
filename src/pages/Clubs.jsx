// Clubs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Dummy club data
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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-14">Clubs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <Link to={`/club/${club.id}`} key={club.id}>
            <div className="rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img src={club.banner} alt={club.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{club.name}</h2>
                <p className="text-gray-600 mt-2">{club.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
