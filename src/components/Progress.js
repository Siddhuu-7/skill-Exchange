import React from 'react';
import { motion } from 'framer-motion'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Progress = () => {
  const progressData = [
    {
      assigned: 'Rahul',
      tasks: [
        { task: 'Print hello World', status: 'pending' },
        { task: 'Read a book', status: 'completed' },
        { task: 'Attend exam', status: 'completed' },
      ],
    },
    {
      assigned: 'Priya',
      tasks: [
        { task: 'Complete React tutorial', status: 'completed' },
        { task: 'Buy groceries', status: 'pending' },
        { task: 'Prepare for interview', status: 'pending' },
      ],
    },
  ];

  const toggleTaskStatus = (assigned, taskIndex) => {
    const updatedData = progressData.map((person) =>
      person.assigned === assigned
        ? {
            ...person,
            tasks: person.tasks.map((task, index) =>
              index === taskIndex
                ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
                : task
            ),
          }
        : person
    );
    console.log(updatedData);
  };

  return (
    <div className="container mt-5">
      <h2>Progress Assigned</h2>
      {progressData.map((person, index) => (
        <div key={index} className="mb-4">
          <h4>{person.assigned} Assigned Tasks</h4>
          <ul className="list-group">
            {person.tasks.map((task, taskIndex) => (
              <motion.li
                key={taskIndex}
                className={`list-group-item d-flex justify-content-between ${
                  task.status === 'completed' ? 'bg-success text-white' : ''
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {task.task}
                <button
                  className={`btn btn-sm ${task.status === 'completed' ? 'btn-success' : 'btn-warning'}`}
                  onClick={() => toggleTaskStatus(person.assigned, taskIndex)}
                >
{task.status}                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Progress;
