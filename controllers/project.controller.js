import Project from '../models/project.model.js';

// POST api/projects – add new project
export const create = async (req, res) => {
  try {
    const saved = await new Project(req.body).save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Error creating project' });
  }
};

// GET api/projects – get all projects
export const findAll = async (req, res) => {
  try {
    res.json(await Project.find());
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error retrieving projects' });
  }
};

// GET api/projects/:id – get project by id
export const findOne = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error retrieving project' });
  }
};

// PUT api/projects/:id – update project by id
export const update = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Project not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Error updating project' });
  }
};

// DELETE api/projects/:id – remove project by id
export const deleteOne = async (req, res) => {
  try {
    const removed = await Project.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error deleting project' });
  }
};

// DELETE api/projects – remove all projects
export const deleteAll = async (req, res) => {
  try {
    const result = await Project.deleteMany({});
    res.json({ message: `${result.deletedCount} projects deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error deleting projects' });
  }
};