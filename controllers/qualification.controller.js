import Qualification from '../models/qualification.model.js';

// POST api/qualifications – add new qualification
export const create = async (req, res) => {
  try {
    const saved = await new Qualification(req.body).save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Error creating qualification' });
  }
};

// GET api/qualifications – get all qualifications
export const findAll = async (req, res) => {
  try {
    res.json(await Qualification.find());
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error retrieving qualifications' });
  }
};

// GET api/qualifications/:id – get qualification by id
export const findOne = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) return res.status(404).json({ message: 'Qualification not found' });
    res.json(qualification);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error retrieving qualification' });
  }
};

// PUT api/qualifications/:id – update qualification by id
export const update = async (req, res) => {
  try {
    const updated = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Qualification not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Error updating qualification' });
  }
};

// DELETE api/qualifications/:id – remove qualification by id
export const deleteOne = async (req, res) => {
  try {
    const removed = await Qualification.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Qualification not found' });
    res.json({ message: 'Qualification deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error deleting qualification' });
  }
};

// DELETE api/qualifications – remove all qualifications
export const deleteAll = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({});
    res.json({ message: `${result.deletedCount} qualifications deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error deleting qualifications' });
  }
};