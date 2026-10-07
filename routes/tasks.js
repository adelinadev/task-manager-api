const express = require('express'); 

const {getTasks, getTask,  createTask, deleteTask, updateTask} = require('../controllers/tasksController');

const router = express.Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTask);

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)

module.exports = router;