import express from 'express';
import {
  getProjects,
  getProjectById,
  createProjects,
  updateProjects,
  deleteProjects
} from '../controllers/projectController.js';

const router = express.Router();

// Universal routes for multiple projects
router.route('/')
  .get(getProjects)          // Get all projects
  .post(createProjects)      // Create multiple projects
  .put(updateProjects)       // Update multiple projects (partial update supported)
  .delete(deleteProjects);   // Delete multiple projects by array of _id

// Routes for single project by ID (optional: can use the universal PUT/DELETE as well)
router.route('/:id')
  .get(getProjectById)
  .put(updateProjects)       // Send [{ _id: id, ...fields }] in body
  .delete(deleteProjects);   // Send [id] in body

export default router;
