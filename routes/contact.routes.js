import express from 'express';
const router = express.Router();
import * as controller from '../controllers/contact.controller.js';

router.get('/', controller.findAll);        // GET api/contacts
router.get('/:id', controller.findOne);     // GET api/contacts/:id
router.post('/', controller.create);        // POST api/contacts
router.put('/:id', controller.update);      // PUT api/contacts/:id
router.delete('/:id', controller.deleteOne);   // DELETE api/contacts/:id
router.delete('/', controller.deleteAll);   // DELETE api/contacts

export default router;