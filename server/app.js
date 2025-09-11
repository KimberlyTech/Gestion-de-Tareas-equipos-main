// server/app.js
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import boardRoutes from './routes/boardRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// CORS: permite localhost y cualquier onrender.com (evita líos de guión/no guión)
app.use(cors({
  origin: (origin, cb) => cb(null, true),
  credentials: true,
}));

app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/boards', boardRoutes);
app.use('/api/users', userRoutes);

// Healthcheck
app.get('/', (_req, res) => res.send('Servidor API OK ✅'));

// Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => { console.error('❌ MongoDB:', err.message); process.exit(1); });

export default app;
