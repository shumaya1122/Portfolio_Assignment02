import express from 'express';
const router = express.Router();
import * as controller from '../controllers/project.controller.js';

router.get('/', controller.findAll);        // GET api/projects
router.get('/:id', controller.findOne);     // GET api/projects/:id
router.post('/', controller.create);        // POST api/projects
router.put('/:id', controller.update);      // PUT api/projects/:id
router.delete('/:id', controller.deleteOne);   // DELETE api/projects/:id
router.delete('/', controller.deleteAll);   // DELETE api/projects

export default router;