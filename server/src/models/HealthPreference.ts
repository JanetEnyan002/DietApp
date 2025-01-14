import mongoose, { Document, Schema } from 'mongoose';

export interface IHealthPreference extends Document {
  userId: string;
  healthIssues: {
    gastritis: boolean;
    pepticUlcer: boolean;
    celiacDisease: boolean;
    bowelSyndrome: boolean;
    lactoseIntolerance: boolean;
  };
  dietaryPreferences: {
    vegetarian: boolean;
    highProtein: boolean;
    highFibre: boolean;
    vegan: boolean;
    beef: boolean;
    pork: boolean;
    fish: boolean;
    poultry: boolean;
  };
  createdAt: Date;
}

const healthPreferenceSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  healthIssues: {
    gastritis: { type: Boolean, default: false },
    pepticUlcer: { type: Boolean, default: false },
    celiacDisease: { type: Boolean, default: false },
    bowelSyndrome: { type: Boolean, default: false },
    lactoseIntolerance: { type: Boolean, default: false },
  },
  dietaryPreferences: {
    vegetarian: { type: Boolean, default: false },
    highProtein: { type: Boolean, default: false },
    highFibre: { type: Boolean, default: false },
    vegan: { type: Boolean, default: false },
    beef: { type: Boolean, default: false },
    pork: { type: Boolean, default: false },
    fish: { type: Boolean, default: false },
    poultry: { type: Boolean, default: false },
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IHealthPreference>('HealthPreference', healthPreferenceSchema);

