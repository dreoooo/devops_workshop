import prisma from '../lib/prisma.js';

// Get all todos
export async function getTodos() {
  return await prisma.todo.findMany();
}

// Get one todo by ID
export async function getTodoById(id) {
  return await prisma.todo.findUnique({
    where: {
      id: Number(id),
    },
  });
}

// Create a new todo
export async function createTodo(data) {
  return await prisma.todo.create({
    data,
  });
}

// Update a todo
export async function updateTodo(id, data) {
  return await prisma.todo.update({
    where: {
      id: Number(id),
    },
    data,
  });
}

// Delete a todo
export async function deleteTodo(id) {
  return await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  });
}
