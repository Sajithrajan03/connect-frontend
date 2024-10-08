import React from 'react';
import Sidebar from '../components/Sidebar';
import Carousel from '../components/Carousel';
import ProjectGrid from '../components/ProjectGrid';

const Home = () => {
  return (
    <div className="font-poppins text-textBlue min-h-screen flex">
      <main className="flex-1 p-4">
        <Carousel />
        <h2 className="text-2xl font-bold text-primary mt-6">New Projects</h2>
        <ProjectGrid />
      </main>
    </div>
  );
};

export default Home;
