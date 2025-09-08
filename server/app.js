import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import boardRoutes from './routes/boardRoutes.js';

const app = express();
app.use(cors({
  origin: [
    'https://tickets-lonewolf.onrender.com', // FRONT (Render, con guion)
    'http://localhost:5173'                  // FRONT local de Vite
  ],
  credentials: true
}));
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/boards', boardRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => {
    console.error('❌ Error de conexión a MongoDB:', err.message);
    process.exit(1);
  });

app.get('/', (_req, res) => res.send('Servidor API funcionando correctamente ✅'));

// **IMPORTANTE PARA RENDER**
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});

export default app;
