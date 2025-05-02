import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './routes/user.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import taskRoutes from './routes/task.routes.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/tasks', taskRoutes);

app.use(errorHandler);

export default app;