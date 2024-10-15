import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegThumbsUp, FaRegComment, FaCalendarAlt, FaMedal, FaFileAlt } from 'react-icons/fa';

const ActivityFeed = () => {
  const [filter, setFilter] = useState('All');
  const [activities, setActivities] = useState([
    { 
      type: 'Event', 
      content: 'Upcoming Webinar on AI Innovations', 
      timestamp: '2 hours ago', 
      likes: 12, 
      comments: 3 
    },
    { 
      type: 'Publication', 
      content: 'Published paper on Quantum Computing by John Doe', 
      timestamp: 'Yesterday', 
      likes: 45, 
      comments: 10 
    },
    { 
      type: 'Hackathon', 
      content: 'Won 2nd place at the Global Hackathon 2024', 
      timestamp: '3 days ago', 
      likes: 78, 
      comments: 15 
    },
    { 
      type: 'Event', 
      content: 'Data Science Club Meetup next Friday', 
      timestamp: '5 days ago', 
      likes: 23, 
      comments: 4 
    },
    // Add more activity items here
  ]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleLike = (index) => {
    const updatedActivities = [...activities];
    updatedActivities[index].likes += 1;
    setActivities(updatedActivities);
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'Event':
        return <FaCalendarAlt className="text-blue-500" />;
      case 'Publication':
        return <FaFileAlt className="text-green-500" />;
      case 'Hackathon':
        return <FaMedal className="text-yellow-500" />;
      default:
        return <FaFileAlt className="text-gray-500" />;
    }
  };

  const filteredActivities = activities.filter(
    (activity) => filter === 'All' || activity.type === filter
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-800">Activity Feed</h2>
      
      {/* Filter Buttons */}
      <div className="flex space-x-3 mb-6">
        {['All', 'Event', 'Publication', 'Hackathon'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              filter === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Activity List */}
      <ul className="space-y-4">
        <AnimatePresence>
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity, index) => (
              <motion.li
                key={index}
                className="p-4 bg-white rounded-lg shadow-md flex flex-col space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon and Content */}
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-700">{activity.content}</p>
                    <p className="text-sm text-gray-500">{activity.timestamp}</p>
                  </div>
                </div>

                {/* Like and Comment Actions */}
                <div className="flex items-center space-x-4 text-gray-500 mt-2">
                  <button
                    className="flex items-center space-x-1 hover:text-blue-500 transition-colors"
                    onClick={() => handleLike(index)}
                  >
                    <FaRegThumbsUp />
                    <span>{activity.likes} Likes</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                    <FaRegComment />
                    <span>{activity.comments} Comments</span>
                  </button>
                </div>
              </motion.li>
            ))
          ) : (
            <motion.li
              className="p-4 text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No activities found for this filter.
            </motion.li>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ActivityFeed;
