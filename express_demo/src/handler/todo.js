import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } from '../models/todo.js';

// GET /todo
export async function getAllTodos(req, res) {
  try {
    const todos = await getTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// GET /todo/:id
export async function getSingleTodo(req, res) {
  try {
    const todo = await getTodoById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: 'Todo not found',
      });
    }

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// POST /todo
export async function addTodo(req, res) {
  try {
    const todo = await createTodo(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// PUT /todo/:id
export async function editTodo(req, res) {
  try {
    const todo = await updateTodo(req.params.id, req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// DELETE /todo/:id
export async function removeTodo(req, res) {
  try {
    const todo = await deleteTodo(req.params.id);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
