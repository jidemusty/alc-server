import express from 'express';
import validate from 'express-validator';
import validations from './validation/student';

const router = express.Router();

import studentController from '../controllers/studentController';

router.get('/students', studentController.list);

router.post(
    '/students', 
    validate(validations.createStudent), 
    studentController.create
);

router.get(
    '/students/:id',
    validate(validations.getStudent),
    studentController.get
);

router.put(
    '/students/:id',
    validate(validations.updateStudent),
    studentController.update
);

router.delete('/students/:id', studentController.delete);

module.exports = router;