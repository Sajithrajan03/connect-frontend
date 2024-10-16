import React from 'react';
import Carousel from '../components/Carousel';
import ActivityFeed from '../components/ActivityFeed';
import ProjectTracker from '../components/ProjectTracker';
import CalendarView from '../components/CalendarView';
import ApplicantManagement from '../components/ApplicantManagement';
import QuickProjectStats from '../components/QuickProjectStats';

const FacultyDashboard = () => {
  // Example data for ongoing and completed projects
  const ongoingProjects = 5;
  const completedProjects = 12;

  return (
    <div className="font-poppins text-textBlue min-h-screen p-4 flex">
      {/* Left Column: Quick Project Stats and Applicant Management */}
      <div className="w-1/4 pr-4">
        <QuickProjectStats ongoing={ongoingProjects} completed={completedProjects} />
        <ApplicantManagement />
      </div>

      {/* Center Column: Activity Feed */}
      <div className="w-2/4 px-4">
        <div className="mb-6">
          <Carousel />
        </div>
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

export default FacultyDashboard;
