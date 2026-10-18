import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

// POST api/users – add new user
export const create = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    const user = new User({ ...req.body, password: hashed });
    const saved = await user.save();
    res.status(201).json({ message: 'User created successfully', userId: saved._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET api/users – get all users
export const findAll = async (req, res) => {
  try {
    res.json(await User.find().select('-password'));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET api/users/:id
export const findOne = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT api/users/:id
export const update = async (req, res) => {
  try {
    if (req.body.password) req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.updated = Date.now();
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
    if (!updated) return res.status(404).json({ message: 'User not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE api/users/:id
export const deleteOne = async (req, res) => {
  try {
    const removed = await User.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE api/users – remove all users
export const deleteAll = async (req, res) => {
  try {
    const result = await User.deleteMany({});
    res.json({ message: `${result.deletedCount} users deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// POST api/users/signin
export const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ message: 'Signed in successfully', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST api/users/signout
export const signout = (req, res) => {
  res.json({ message: 'Signed out successfully. Delete the token on the client side.' });
};