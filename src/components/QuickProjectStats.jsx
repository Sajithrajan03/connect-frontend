import React from 'react';

const QuickProjectStats = ({ ongoing, completed }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">Project Stats</h2>
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-600">{ongoing}</p>
          <p className="text-gray-600">Ongoing Projects</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-green-600">{completed}</p>
          <p className="text-gray-600">Completed Projects</p>
        </div>
      </div>
    </div>
  );
};

export default QuickProjectStats;
