import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';

const SkillDevelopment = () => {
  const skills = [
    { name: 'Programming', points: 8, maxPoints: 10 },
    { name: 'Communication', points: 5, maxPoints: 10 },
    { name: 'Data Analysis', points: 6, maxPoints: 10 },
    { name: 'Machine Learning', points: 4, maxPoints: 10 },
    // More skills here
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-800 flex items-center">
        <FaLightbulb className="text-yellow-500 mr-2" />
        Skill Development
      </h2>
      <ul className="space-y-4">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg font-bold text-gray-700">{skill.name}</p>
              <p className="text-sm text-gray-500">{skill.points} / {skill.maxPoints} points</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: `${(skill.points / skill.maxPoints) * 100}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${(skill.points / skill.maxPoints) * 100}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </motion.li>
        ))}
      </ul>
      <div className="mt-6 text-sm text-gray-600">
        <p>Tip: Keep improving your skills to reach the next level. Explore related courses and projects for more growth.</p>
      </div>
    </div>
  );
};

export default SkillDevelopment;
