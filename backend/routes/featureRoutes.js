import express from 'express';
import {
  getFeatures,
  getFeatureById,
  createFeatures,
  updateFeatures,
  deleteFeatures
} from '../controllers/featureController.js';

const router = express.Router();

// GET all, POST multiple, PUT multiple, DELETE multiple
router.route('/')
  .get(getFeatures)
  .post(createFeatures)
  .put(updateFeatures)
  .delete(deleteFeatures);

// GET, PUT, DELETE single item by ID
router.route('/:id')
  .get(getFeatureById)
  .put(updateFeatures) // optional: allow single-item update via _id in array
  .delete(deleteFeatures); // optional: allow single-item delete via _id in array

export default router;
