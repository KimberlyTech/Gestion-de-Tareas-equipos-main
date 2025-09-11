import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const users = await User.find({}, 'nombre email');
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: 'Error listando usuarios', error: e.message });
  }
});

export default router;
