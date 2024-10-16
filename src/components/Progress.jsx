import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Progress({ progressData = {} }) {
  const {
    percentage = 0,
    currentMilestone = 0,
    totalMilestones = 0,
    milestones = [],
  } = progressData;

  
  const getProgressBarColor = (percentage) => {
    if (percentage < 50) return "bg-red-500";
    if (percentage < 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div >
      <h4 className="text-2xl font-bold text-gray-800 mb-4">Project Progress</h4>
      <div className="relative pt-1">
        <div className="flex mb-4 items-center justify-between">
          <div>
            <span className="text-sm font-semibold inline-block py-1 px-3 uppercase rounded-full text-blue-600 bg-blue-200">
              {percentage}% Complete
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold inline-block text-blue-600">
              Milestone {currentMilestone} of {totalMilestones}
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-6 mb-4 text-xs flex rounded-full bg-gray-200">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1 }}
            className={`flex flex-col text-center whitespace-nowrap text-white justify-center ${getProgressBarColor(
              percentage
            )}`}
            style={{ width: `${percentage}%` }}
          ></motion.div>
        </div>
      </div>
      <ul className="mt-6 space-y-3">
        {milestones.length > 0 ? (
          milestones.map((milestone, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 ${
                index < currentMilestone ? "text-green-600" : "text-gray-600"
              }`}
            >
              <FaCheckCircle
                className={`${
                  index < currentMilestone ? "text-green-500" : "text-gray-400"
                }`}
              />
              {milestone}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No milestones available.</li>
        )}
      </ul>
    </div>
  );
}
