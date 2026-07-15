import TodoCard from "./TodoCard";
import { Todo } from "@/types/todo";

interface TodoGridProps {
  todos: Todo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoGrid({
  todos,
  onEdit,
  onDelete,
}: TodoGridProps) {

  if (todos.length === 0) {
    return (
      <section className="max-w-5xl mx-auto px-6 pb-10">

        <div
          className="
            rounded-[2rem]
            border
            border-gray-200
            bg-white/70
            backdrop-blur-xl
            p-12
            text-center
            shadow-lg
            transition-all
            duration-300
            hover:shadow-xl
          "
        >

          <div
            className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-blue-100
              to-purple-100
              text-4xl
              shadow-sm
            "
          >
            📝
          </div>


          <h2
            className="
              mt-6
              text-2xl
              font-bold
              tracking-tight
              text-gray-900
            "
          >
            No tasks yet 
          </h2>


          <p
            className="
              mt-3
              text-sm
              md:text-base
              text-gray-500
              font-medium
            "
          >
            Start organizing your day by creating your first{" "}
            <span
              className="
                font-semibold
                text-purple-600
              "
            >
              Todo
            </span>
            .
          </p>

        </div>

      </section>
    );
  }


  return (
    <section className="max-w-5xl mx-auto px-6 pb-10">

      <div
        className="
          mb-6
          flex
          items-center
          justify-between
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            tracking-tight
            text-gray-900
          "
        >
          Your Tasks 🌱
        </h2>


        <span
          className="
            rounded-full
            bg-purple-100
            px-4
            py-1.5
            text-sm
            font-semibold
            text-purple-600
          "
        >
          {todos.length} {todos.length === 1 ? "Task" : "Tasks"}
        </span>

      </div>


      <div
        className="
          grid
          gap-6
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
      >

        {todos.map((todo) => (

          <div
            key={todo.id}
            className="
              animate-in
              fade-in
              slide-in-from-bottom-4
              duration-500
            "
          >

            <TodoCard
              id={todo.id}
              title={todo.title}
              description={todo.description}
              onEdit={onEdit}
              onDelete={onDelete}
            />

          </div>

        ))}

      </div>

    </section>
  );
}