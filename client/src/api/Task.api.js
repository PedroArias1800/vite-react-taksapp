import axios from 'axios'

export const createTaskRequest = async (task) => 
  await axios.post('http://localhost:4000/task', task);

export const getAllTaskRequest = async () => 
  await axios.get('http://localhost:4000/tasks');

export const getTaskIdRequest = async (id) => 
  await axios.get(`http://localhost:4000/task/${id}`);

export const deleteTaskRequest = async (id) => 
  await axios.delete(`http://localhost:4000/task/${id}`);

export const updateTaskRequest = async (id, newTask) =>
  await axios.put(`http://localhost:4000/task/${id}`, newTask);

export const updateToggleTaskRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/task/${id}`, {done})
