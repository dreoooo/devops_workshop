import express from 'express';

import { getAllTodos, getSingleTodo, addTodo, editTodo, removeTodo } from '../handler/todo.js';

const router = express.Router();

// GET /todo
router.get('/', getAllTodos);

// GET /todo/:id
router.get('/:id', getSingleTodo);

// POST /todo
router.post('/', addTodo);

// PUT /todo/:id
router.put('/:id', editTodo);

// DELETE /todo/:id
router.delete('/:id', removeTodo);

export default router;
