import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

const Feature = mongoose.models.Feature || mongoose.model('Feature', featureSchema);

export default Feature;
