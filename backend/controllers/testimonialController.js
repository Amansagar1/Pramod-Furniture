
import Testimonial from '../models/Testimonial.js';

// GET all testimonials
export const getTestimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json({ success: true, data: testimonials });
  } catch (err) {
    next(err);
  }
};

// GET testimonial by ID
export const getTestimonialById = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }
    res.status(200).json({ success: true, data: testimonial });
  } catch (err) {
    next(err);
  }
};

// POST multiple testimonials
export const createTestimonials = async (req, res, next) => {
  try {
    const testimonials = req.body;
    if (!Array.isArray(testimonials) || testimonials.length === 0) {
      return res.status(400).json({ success: false, message: 'Provide a non-empty array' });
    }

    for (const t of testimonials) {
      if (!t.title || !t.content || !t.author) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }
    }

    const saved = await Testimonial.insertMany(testimonials);
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    next(err);
  }
};
    
// PUT multiple testimonials
export const updateTestimonials = async (req, res, next) => {
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
      const updated = await Testimonial.findByIdAndUpdate(_id, { $set: fields }, { new: true });
      if (updated) results.push(updated);
    }

    res.status(200).json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
};

// DELETE multiple testimonials
export const deleteTestimonials = async (req, res, next) => {
  try {
    const ids = req.body; // array of _id strings
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ success: false, message: 'Provide an array of IDs to delete' });
    }

    const deleted = await Testimonial.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ success: true, deletedCount: deleted.deletedCount });
  } catch (err) {
    next(err);
  }
};
