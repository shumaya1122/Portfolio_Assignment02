import express from 'express';
const router = express.Router();
import * as controller from '../controllers/user.controller.js';

import requireSignin from '../middleware/auth.middleware.js';

router.post('/', controller.create);                        // sign up – public
router.post('/signin', controller.signin);                  // public
router.post('/signout', controller.signout);                // public
router.get('/', requireSignin, controller.findAll);         // protected
router.get('/:id', requireSignin, controller.findOne);      // protected
router.put('/:id', requireSignin, controller.update);       // protected
router.delete('/:id', requireSignin, controller.deleteOne); // protected
router.delete('/', requireSignin, controller.deleteAll);    // protected

export default router;