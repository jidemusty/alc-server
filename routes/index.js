import express from 'express';
const router = express.Router();

import studentController from '../controllers/studentController';

router.get('/students', studentController.all);
// router.post('/student/create', studentController.create);

module.exports = router;