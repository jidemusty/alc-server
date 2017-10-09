import express from 'express';
const router = express.Router();

import studentController from '../controllers/studentController';

router.get('/students', studentController.list);

router.post('/student', studentController.create);

router.get('/student/:id', studentController.get);

router.put('/student/:id', studentController.update);

router.delete('/student/:id', studentController.delete);

module.exports = router;