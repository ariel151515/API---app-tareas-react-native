import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import tasksRoutes from './routes/tasks.js';

const app = express();

// Configura el middleware express.json() antes de tus rutas
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Luego, configura tus rutas fgfg
app.use(tasksRoutes);

export default app;
