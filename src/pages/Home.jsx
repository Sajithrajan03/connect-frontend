import React from 'react';
import Carousel from '../components/Carousel';
import ActivityFeed from '../components/ActivityFeed';
import PerformanceOverview from '../components/PerformanceOverview';
import ProjectTracker from '../components/ProjectTracker';
import SkillDevelopment from '../components/SkillDevelopment';
import CalendarView from '../components/CalendarView';

const Home = () => {
  return (
    <div className="font-poppins text-textBlue min-h-screen p-4 flex">
      {/* Left Column: Performance Overview and Skill Development */}
      <div className="w-1/4 pr-4">
        <div className="mb-6">
          <PerformanceOverview />
        </div>
        <div className="mb-6">
          <SkillDevelopment />
        </div>
      </div>

      {/* Center Column: Activity Feed */}
      <div className="w-2/4 px-4 ">
      <div className="mb-6"> <Carousel/></div>
       
        <ActivityFeed />
      </div>

      {/* Right Column: Calendar and Project Tracker */}
      <div className="w-1/4 pl-4">
        <div className="mb-6">
          <CalendarView />
        </div>
        <div className="mb-6">
          <ProjectTracker />
        </div>
      </div>
    </div>
  );
};

export default Home;
