import { Router } from "express";
import { deleteTask, 
         getTask, 
         getTasks, 
         getTasksCount, 
         saveTask, 
         updateTask } from "../controllers/tasks.js";

const router = Router();

router.post('/tasks', saveTask);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', updateTask);
router.get('/count', getTasksCount);

export default router;
