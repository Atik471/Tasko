import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import connectDB from './src/config/db.config.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());


connectDB();