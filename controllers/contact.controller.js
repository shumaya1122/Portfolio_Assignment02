import Contact from '../models/contact.model.js';

// POST api/contacts – add new contact
export const create = async (req, res) => {
  try {
    const saved = await new Contact(req.body).save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Error creating contact' });
  }
};

// GET api/contacts – get all contacts
export const findAll = async (req, res) => {
  try {
    res.json(await Contact.find());
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error retrieving contacts' });
  }
};

// GET api/contacts/:id – get contact by id
export const findOne = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error retrieving contact' });
  }
};

// PUT api/contacts/:id – update contact by id
export const update = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Contact not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message || 'Error updating contact' });
  }
};

// DELETE api/contacts/:id – remove contact by id
export const deleteOne = async (req, res) => {
  try {
    const removed = await Contact.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error deleting contact' });
  }
};

// DELETE api/contacts – remove all contacts
export const deleteAll = async (req, res) => {
  try {
    const result = await Contact.deleteMany({});
    res.json({ message: `${result.deletedCount} contacts deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Error deleting contacts' });
  }
};