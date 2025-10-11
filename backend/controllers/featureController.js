import Feature from '../models/Feature.js';

// GET all features
export const getFeatures = async (req, res, next) => {
  try {
    const features = await Feature.find();
    res.status(200).json({ success: true, data: features });
  } catch (err) {
    next(err);
  }
};

// GET feature by ID
export const getFeatureById = async (req, res, next) => {
  try {
    const feature = await Feature.findById(req.params.id);
    if (!feature) {
      return res.status(404).json({ success: false, message: 'Feature not found' });
    }
    res.status(200).json({ success: true, data: feature });
  } catch (err) {
    next(err);
  }
};

// POST multiple features
export const createFeatures = async (req, res, next) => {
  try {
    const features = req.body;
    if (!Array.isArray(features) || features.length === 0) {
      return res.status(400).json({ success: false, message: 'Provide a non-empty array' });
    }

    for (const f of features) {
      if (!f.title || !f.description) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }
    }

    const saved = await Feature.insertMany(features);
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    next(err);
  }
};

// PUT multiple features
export const updateFeatures = async (req, res, next) => {
  try {
    const updates = req.body; // array of objects, each must have _id
    if (!Array.isArray(updates) || updates.length === 0) {
      return res.status(400).json({ success: false, message: 'Provide a non-empty array' });
    }

    const results = [];
    for (const u of updates) {
      if (!u._id) {
        return res.status(400).json({ success: false, message: 'Each item must have _id' });
      }
      const updated = await Feature.findByIdAndUpdate(u._id, u, { new: true });
      if (updated) results.push(updated);
    }

    res.status(200).json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
};

// DELETE multiple features
export const deleteFeatures = async (req, res, next) => {
  try {
    const ids = req.body; // array of _id strings
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ success: false, message: 'Provide an array of IDs to delete' });
    }

    const deleted = await Feature.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ success: true, deletedCount: deleted.deletedCount });
  } catch (err) {
    next(err);
  }
};
