"use client";

import { useEffect, useState } from "react";

import Header from "./Header";
import TodoGrid from "./TodoGrid";
import TodoForm from "./TodoForm";
import DeleteTodoDialog from "./DeleteTodoDialog";

import { Button } from "@/components/ui/button";

import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "@/lib/todos";

import { Todo } from "@/types/todo";

export default function TodoDashboard() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [open, setOpen] = useState(false);

  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    loadTodos();
  }, []);



  async function loadTodos() {
    try {
      setLoading(true);

      const data = await getTodos();

      setTodos(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  }




  async function handleSave(
    title: string,
    description: string
  ) {

    try {

      if (editingTodo) {

        await updateTodo(editingTodo.id, {
          title,
          description,
        });

      } else {

        await createTodo({
          title,
          description,
        });

      }


      await loadTodos();

      setEditingTodo(null);


    } catch (error) {

      console.error(error);

    }

  }





  function handleEdit(id: number) {

    const todo = todos.find(
      (todo) => todo.id === id
    );


    if (!todo) return;


    setEditingTodo(todo);

    setOpen(true);

  }





  function handleDelete(id: number) {

    setDeleteId(id);

  }





  async function confirmDelete() {

    if (!deleteId) return;


    try {

      await deleteTodo(deleteId);


      await loadTodos();


      setDeleteId(null);


    } catch (error) {

      console.error(error);

    }

  }




  return (

    <main
      className="
        min-h-screen
        pb-10
      "
    >

      <Header />



      <section
        className="
          max-w-5xl
          mx-auto
          px-6
          mb-8
        "
      >

        <div
          className="
            flex
            justify-between
            items-center
          "
        >

          <div>

            <h2
              className="
                text-2xl
                font-bold
                text-gray-900
              "
            >
              My Todo List 
            </h2>


            <p
              className="
                mt-1
                text-sm
                font-medium
                text-gray-500
              "
            >
              Stay productive and keep track of your goals.
            </p>

          </div>




          <Button

            onClick={() => {

              setEditingTodo(null);

              setOpen(true);

            }}

            className="
              group
              rounded-2xl
              px-6
              py-5
              font-bold
              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-pink-500
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            <span
              className="
                mr-2
                text-xl
                transition-transform
                duration-300
                group-hover:rotate-90
              "
            >
              +
            </span>


            Add Todo

          </Button>


        </div>


      </section>




      {loading ? (

        <div
          className="
            max-w-5xl
            mx-auto
            px-6
            py-10
            text-center
            text-gray-500
            font-medium
          "
        >

          Loading your tasks... ✨

        </div>


      ) : (

        <TodoGrid

          todos={todos}

          onEdit={handleEdit}

          onDelete={handleDelete}

        />

      )}




      <TodoForm

        open={open}

        onOpenChange={setOpen}

        onSave={handleSave}

        todo={editingTodo}

      />




      <DeleteTodoDialog

        open={deleteId !== null}

        onOpenChange={(open) => {

          if (!open) {

            setDeleteId(null);

          }

        }}

        onConfirm={confirmDelete}

      />


    </main>

  );
}