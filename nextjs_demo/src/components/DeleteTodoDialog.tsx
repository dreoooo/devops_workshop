"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteTodoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export default function DeleteTodoDialog({
  open,
  onOpenChange,
  onConfirm,
}: DeleteTodoDialogProps) {
  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <AlertDialogContent
        className="
          rounded-[2rem]
          border
          border-gray-200
          bg-white/90
          backdrop-blur-xl
          shadow-2xl
          p-8
          sm:max-w-[450px]
        "
      >

        <AlertDialogHeader>

          <div
            className="
              mb-5
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-red-100
              text-3xl
              shadow-sm
            "
          >
            🗑️
          </div>


          <AlertDialogTitle
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
            "
          >
            Delete Todo? 🥺
          </AlertDialogTitle>


          <AlertDialogDescription
            className="
              mt-4
              text-sm
              md:text-base
              leading-relaxed
              font-medium
              text-gray-500
            "
          >
            Are you sure you want to remove this task?

            <br />
            <br />

            This action cannot be undone, so make sure you no longer need
            this task before continuing.
          </AlertDialogDescription>


        </AlertDialogHeader>




        <AlertDialogFooter
          className="
            mt-8
            gap-3
          "
        >

          <AlertDialogCancel
            className="
              rounded-2xl
              px-6
              font-semibold
              border-gray-200
              hover:bg-gray-100
            "
          >
            Keep Task
          </AlertDialogCancel>



          <AlertDialogAction
            className="
              rounded-2xl
              px-6
              font-bold
              bg-gradient-to-r
              from-red-500
              to-rose-600
              text-white
              shadow-md
              transition-all
              hover:scale-105
              hover:shadow-lg
            "
            onClick={onConfirm}
          >
            Delete Forever 🗑️
          </AlertDialogAction>


        </AlertDialogFooter>


      </AlertDialogContent>

    </AlertDialog>
  );
}