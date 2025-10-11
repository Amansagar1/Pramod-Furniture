import express from 'express';
import {
  getTestimonials,
  getTestimonialById,
  createTestimonials,
  updateTestimonials,
  deleteTestimonials
} from '../controllers/testimonialController.js';

const router = express.Router();

router.route('/')
  .get(getTestimonials)
  .post(createTestimonials)
  .put(updateTestimonials)
  .delete(deleteTestimonials);

router.route('/:id')
  .get(getTestimonialById)
  .put(updateTestimonials) // optional: single update using _id in array
  .delete(deleteTestimonials); // optional: single delete using _id in array

export default router;
