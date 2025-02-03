import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';

const Progress = () => {
  const [progressData, setProgressData] = useState([]);

 
  const fetchAssignedTasks = async () => {
    try {
      const id = localStorage.getItem('Id');
      if (!id) return;

      const res = await axios.get(`https://backend-diwr.onrender.com/fetch/goals/${id}`);

      
      const formattedData = res.data.map((item) => ({
        assignedBy: item.assignedBy.name,
        assignedTo: item.assignedTo,
        tasks: item.assignedGoal.map((goal) => ({
          _id: goal._id, 
          task: goal.goals, 
          status: goal.complete
        }))
      }));

      setProgressData(formattedData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchAssignedTasks();
  }, []);

  // Function to update task status in the backend
  const toggleTaskStatus = async (assignedTo, taskId) => {
    try {
      const res = await axios.put(`https://backend-diwr.onrender.com/update/goal`, {
        assignedTo,
        taskId
      });

      if (res.status === 200) {
        // Update UI after a successful request
        setProgressData((prevData) =>
          prevData.map((person) =>
            person.assignedTo === assignedTo
              ? {
                  ...person,
                  tasks: person.tasks.map((task) =>
                    task._id === taskId
                      ? { ...task, status: "completed" }
                      : task
                  ),
                }
              : person
          )
        );
      }
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Progress Assigned</h2>
      {progressData.map((person, index) => (
        <div key={index} className="mb-4">
          <h4>{person.assignedBy} Assigned Tasks</h4>
          <ul className="list-group">
            {person.tasks.map((task) => (
              <motion.li
                key={task._id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  task.status === 'completed' ? 'bg-success text-white' : ''
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-truncate w-75">{task.task}</span>
                <button
                  className={`btn btn-sm ${task.status === 'completed' ? 'btn-success' : 'btn-warning'}`}
                  onClick={() => toggleTaskStatus(person.assignedTo, task._id)}
                  disabled={task.status === 'completed'}
                >
                  {task.status === 'completed' ? 'Completed' : 'Complete'}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Progress;
