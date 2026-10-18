import express from 'express';
const router = express.Router();
import * as controller from '../controllers/qualification.controller.js';

router.get('/', controller.findAll);        // GET api/qualifications
router.get('/:id', controller.findOne);     // GET api/qualifications/:id
router.post('/', controller.create);        // POST api/qualifications
router.put('/:id', controller.update);      // PUT api/qualifications/:id
router.delete('/:id', controller.deleteOne);   // DELETE api/qualifications/:id
router.delete('/', controller.deleteAll);   // DELETE api/qualifications

export default router;