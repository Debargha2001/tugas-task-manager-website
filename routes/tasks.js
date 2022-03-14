const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks_controller');


router.post('/create-task',taskController.createTask);
router.post('/delete-tasks',taskController.deleteTasks);
router.get('/update-form',taskController.updateForm);
router.post('/update-form/tasks/update-task/:id',taskController.updateTask);

module.exports = router;
