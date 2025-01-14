import { Router } from 'express';
import { getHealthPreference, updateHealthPreference } from '../controllers/healthPreferenceController';

const router = Router();

router.get('/:userId', async (req, res) => {
  try {
    const result = await getHealthPreference(req, res);
    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

router.put('/:userId', async (req, res) => {
  try {
    const result = await updateHealthPreference(req, res);
    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

export default router;