import React, { useState, useEffect } from 'react';
import Connect from "../assets/connect.png";
import Teacher from "../assets/teacher.png";
import Community from "../assets/community.png";

const carouselData = [
  { title: 'Connect with Peers', description: 'Collaborate on real-world projects.', image: Connect },
  { title: 'Mentorship', description: 'Get guidance from experienced faculty.', image: Teacher },
  { title: 'Join Communities', description: 'Engage in forums and discussions.', image: Community },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    setCurrent((current + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrent((current - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex h-full">
              <div className="flex-grow flex items-center justify-center bg-white-800 bg-opacity-50">
                <div className="p-4 md:p-6 text-center z-10 text-black">
                  <h2 className="text-xl md:text-3xl font-bold">{item.title}</h2>
                  <p className="mt-2 text-sm md:text-lg">{item.description}</p>
                </div>
              </div>
              <img src={item.image} alt={item.title} className="w-1/3 h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-900 text-white p-2 rounded-full shadow-md transition-all duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-900 text-white p-2 rounded-full shadow-md transition-all duration-300"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-black' : 'bg-gray-400'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
