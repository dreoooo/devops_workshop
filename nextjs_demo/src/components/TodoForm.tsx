"use client";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Todo } from "@/types/todo";

interface TodoFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (title: string, description: string) => void;
  todo?: Todo | null;
}

export default function TodoForm({
  open,
  onOpenChange,
  onSave,
  todo,
}: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [todo, open]);


  function handleSave() {

    if (!title.trim()) return;

    onSave(title, description);

    setTitle("");
    setDescription("");

    onOpenChange(false);
  }


  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent
        className="
          rounded-[2rem]
          border
          border-gray-200
          bg-white/90
          backdrop-blur-xl
          shadow-2xl
          sm:max-w-[520px]
          p-8
        "
      >

        <DialogHeader>

          <DialogTitle
            className="
              text-3xl
              font-extrabold
              tracking-tight
              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-pink-500
              bg-clip-text
              text-transparent
            "
          >
            {todo ? "Edit Your Task ✨" : "Create a New Task 🌱"}
          </DialogTitle>


          <p
            className="
              mt-3
              text-sm
              font-medium
              text-gray-500
            "
          >
            {todo
              ? "Update your task details and keep everything organized."
              : "Add something new to your productivity journey."
            }
          </p>

        </DialogHeader>



        <div
          className="
            mt-6
            space-y-5
          "
        >

          <div className="space-y-2">

            <Label
              htmlFor="title"
              className="
                text-sm
                font-bold
                text-gray-700
              "
            >
              Task Title
            </Label>


            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Example: Learn Prisma ORM"
              className="
                h-12
                rounded-2xl
                border-gray-200
                bg-gray-50
                px-4
                font-medium
                transition-all
                focus:bg-white
                focus:ring-2
                focus:ring-purple-300
              "
            />

          </div>




          <div className="space-y-2">

            <Label
              htmlFor="description"
              className="
                text-sm
                font-bold
                text-gray-700
              "
            >
              Description
            </Label>


            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you need to accomplish..."
              className="
                min-h-[130px]
                rounded-2xl
                resize-none
                border-gray-200
                bg-gray-50
                p-4
                font-medium
                transition-all
                focus:bg-white
                focus:ring-2
                focus:ring-purple-300
              "
            />

          </div>

        </div>




        <DialogFooter
          className="
            mt-8
            gap-3
          "
        >

          <Button
            variant="outline"
            className="
              rounded-2xl
              px-6
              font-semibold
              border-gray-200
              hover:bg-gray-100
            "
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>



          <Button
            className="
              rounded-2xl
              px-7
              font-bold
              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-pink-500
              text-white
              shadow-md
              transition-all
              hover:scale-105
              hover:shadow-lg
            "
            onClick={handleSave}
          >
            {todo ? "Save Changes ✨" : "Create Task 🚀"}
          </Button>

        </DialogFooter>


      </DialogContent>

    </Dialog>
  );
}