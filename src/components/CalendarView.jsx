import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarView.css'; // Import the custom styles
import { motion } from 'framer-motion';
import { FaPlus, FaClock } from 'react-icons/fa';

const CalendarView = () => {
  const eventsData = {
    '2024-10-20': [
      { name: 'AI Research Presentation', time: '10:00 AM' },
      { name: 'Team Meeting', time: '2:00 PM' },
    ],
    '2024-11-05': [
      { name: 'Web Development Milestone', time: '1:00 PM' },
    ],
    '2024-11-10': [
      { name: 'Data Science Assignment', time: '12:00 PM' },
    ],
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState(eventsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReminder, setNewReminder] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddReminder = () => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    if (!newReminder) return;

    const newEvent = { name: newReminder, time: 'All Day' };
    setEvents((prevEvents) => ({
      ...prevEvents,
      [dateKey]: prevEvents[dateKey] ? [...prevEvents[dateKey], newEvent] : [newEvent],
    }));
    setNewReminder('');
    setIsModalOpen(false);
  };

  const eventsForSelectedDate = events[selectedDate.toISOString().split('T')[0]] || [];

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-xl p-6 h-full">
      {/* Header with "Select a Date" and "+" button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-700">Calendar</h2>
        <button
          className="w-8 h-8 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus />
        </button>
      </div>

      {/* Calendar */}
      <div className="flex-1">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="custom-calendar"
        />
      </div>

      {/* Events section at the bottom */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Events for {selectedDate.toDateString()}
        </h2>
        <ul className="event-list">
          {eventsForSelectedDate.length > 0 ? (
            eventsForSelectedDate.map((event, index) => (
              <motion.li
                key={index}
                className="event-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <p className="text-lg font-semibold text-gray-700">{event.name}</p>
                  <p className="event-time">
                    <FaClock className="mr-1" />
                    {event.time}
                  </p>
                </div>
              </motion.li>
            ))
          ) : (
            <p className="text-gray-500">No events for this date.</p>
          )}
        </ul>
      </div>

      {/* Modal for Adding a New Reminder */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Create a New Reminder</h3>
            <input
              type="text"
              placeholder="Enter reminder"
              value={newReminder}
              onChange={(e) => setNewReminder(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 mb-4"
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddReminder}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
              >
                Add Reminder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
