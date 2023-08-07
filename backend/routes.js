const express = require('express');
const router = express.Router();

// Import your controller functions
const { getTodos, createTodo, updateTodo, deleteTodo } = require('./controllers');

// Define API routes
router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;
