import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Todo = ({ handelCard }) => {
  const [showModal, setShowModal] = useState(true);
  const [task, setTask] = useState(''); 
  const [tasks, setTasks] = useState([]);

  

  const handleCloseModal = () => {
    setShowModal(false);
    handelCard()
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container text-center mt-5">
      <div className={`modal ${showModal ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
            <div className="todo-container mt-4">
        <h3>Add Tasks+</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>

        <ul className="list-group mt-3">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              {task}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Todo;
