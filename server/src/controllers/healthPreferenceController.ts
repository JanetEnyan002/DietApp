import { Request, Response } from 'express';
import HealthPreference, { IHealthPreference } from '../models/HealthPreference';

export const createHealthPreference = async (req: Request, res: Response) => {
  try {
    const healthPreference: IHealthPreference = new HealthPreference(req.body);
    await healthPreference.save();
    res.status(201).json(healthPreference);
  } catch (error) {
    res.status(500).json({ error: 'Error creating health preference' });
  }
};

export const getHealthPreference = async (req: Request, res: Response) => {
  try {
    const healthPreference = await HealthPreference.findOne({ userId: req.params.userId });
    if (!healthPreference) {
      return res.status(404).json({ error: 'Health preference not found' });
    }
    res.json(healthPreference);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching health preference' });
  }
};

export const updateHealthPreference = async (req: Request, res: Response) => {
  try {
    const healthPreference = await HealthPreference.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!healthPreference) {
      return res.status(404).json({ error: 'Health preference not found' });
    }
    res.json(healthPreference);
  } catch (error) {
    res.status(500).json({ error: 'Error updating health preference' });
  }
};

