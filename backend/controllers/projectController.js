import Project from '../models/Project.js';

// GET all projects
export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ success: true, data: projects });
  } catch (err) {
    next(err);
  }
};

// GET project by ID
export const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
};

// POST multiple projects
export const createProjects = async (req, res, next) => {
  try {
    const projects = req.body;
    if (!Array.isArray(projects) || projects.length === 0) {
      return res.status(400).json({ success: false, message: 'Provide a non-empty array' });
    }

    for (const p of projects) {
      if (!p.title || !p.type || !p.image) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }
    }

    const saved = await Project.insertMany(projects);
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    next(err);
  }
};

// PUT multiple projects
export const updateProjects = async (req, res, next) => {
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

      // Partial update: only update provided fields
      const { _id, ...fields } = u;
      const updated = await Project.findByIdAndUpdate(_id, { $set: fields }, { new: true });
      if (updated) results.push(updated);
    }

    res.status(200).json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
};

// DELETE multiple projects
export const deleteProjects = async (req, res, next) => {
  try {
    const ids = req.body; // array of _id strings
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ success: false, message: 'Provide an array of IDs to delete' });
    }

    const deleted = await Project.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ success: true, deletedCount: deleted.deletedCount });
  } catch (err) {
    next(err);
  }
};
