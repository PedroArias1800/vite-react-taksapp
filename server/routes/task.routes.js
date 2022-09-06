import {Router} from 'express';
import {taskId, tasks, createTask, updateTask, deleteTask} from '../controllers/task.controllers.js';

const router = Router();

router.get('/task/:id', taskId)
router.get('/tasks', tasks)
router.post('/task', createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)

export default router;
