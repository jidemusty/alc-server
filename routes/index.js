import express from 'express';
import validate from 'express-validator';
import validations from './validation/student';

const router = express.Router();

import studentController from '../controllers/studentController';

router.get('/students', studentController.list);

router.post(
    '/student', 
    validate(validations.createStudent), 
    studentController.create
);

router.get('/student/:id', studentController.get);

router.put(
    '/student/:id',
    validate(validations.updateStudent),
    studentController.update
);

router.delete('/student/:id', studentController.remove);

router.param('id', validate(validations.getStudent));
router.param('id', studentController.load);

module.exports = router;