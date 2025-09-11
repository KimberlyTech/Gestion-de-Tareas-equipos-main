import express from 'express';
import User from '../models/User.js'; // asegúrate que existe este modelo

const router = express.Router();

// GET /api/users -> lista usuarios (para dropdown asignar miembros)
router.get('/', async (req, res) => {
  try {
    const users = await User.find({}, 'nombre email'); // sólo devolvemos lo necesario
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error listando usuarios', error: err.message });
  }
});

export default router;
