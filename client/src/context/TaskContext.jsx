import { createContext, useContext, useState } from "react";
import { getAllTaskRequest, deleteTaskRequest, createTaskRequest, getTaskIdRequest, updateTaskRequest,
updateToggleTaskRequest } from '../api/Task.api';

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context)
        throw new Error("No existe el contexto")

    return context;
}

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    async function obtenerTasks() {
        const response = await getAllTaskRequest();
        setTasks(response.data)
    }

    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskRequest(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    const createTask = async (task) => {
        try {
            const response = await createTaskRequest(task)
            // const response2 = await getTaskIdRequest(response.data.id)
            // response2.data.action = 'no';
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getTask = async (id) => {
        try {
            const response = await getTaskIdRequest(id);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async (id, newTask) => {
        try {
            const response = await updateTaskRequest(id, newTask);
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    const updateToggleTask = async (id) => {
        const taskFound = tasks.find((task) => task.id === id)
        try {
            await updateToggleTaskRequest(id, taskFound.done === 0 ? true : false);
            setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task )))
        } catch (error) {
            console.log(error)
        }
    }

    return (<TaskContext.Provider value={{ tasks, obtenerTasks, deleteTask, createTask, getTask, updateTask, updateToggleTask }}>
        {children}
    </TaskContext.Provider>
    )
};