import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './routes/user.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/user', userRoutes);

app.use(errorHandler);

export default app;