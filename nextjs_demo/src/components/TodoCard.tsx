import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TodoCardProps {
  id: number;
  title: string;
  description: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoCard({
  id,
  title,
  description,
  onEdit,
  onDelete,
}: TodoCardProps) {
  return (
    <Card
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-gray-200
        bg-white/80
        backdrop-blur-xl
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >

      {/* Soft gradient decoration */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-1.5
          bg-gradient-to-r
          from-blue-400
          via-purple-400
          to-pink-400
        "
      />


      <CardHeader className="pt-7 pb-3">

        <div
          className="
            mb-3
            inline-flex
            w-fit
            rounded-full
            bg-purple-100
            px-3
            py-1
            text-xs
            font-semibold
            text-purple-600
          "
        >
          ✨ Todo Task
        </div>


        <CardTitle
          className="
            text-xl
            font-extrabold
            tracking-tight
            text-gray-900
            line-clamp-1
          "
        >
          {title}
        </CardTitle>

      </CardHeader>



      <CardContent>

        <p
          className="
            min-h-[70px]
            text-sm
            leading-relaxed
            text-gray-500
            font-medium
          "
        >
          {description || "No description provided."}
        </p>



        <div
          className="
            mt-7
            flex
            justify-end
            gap-3
          "
        >

          <Button
            variant="outline"
            className="
              rounded-2xl
              border-gray-200
              bg-white
              px-5
              font-semibold
              text-gray-700
              transition-all
              duration-200
              hover:bg-purple-50
              hover:text-purple-600
              hover:border-purple-200
            "
            onClick={() => onEdit(id)}
          >
            ✏️ Edit
          </Button>



          <Button
            variant="destructive"
            className="
              rounded-2xl
              px-5
              font-semibold
              transition-all
              duration-200
              hover:scale-105
              shadow-sm
            "
            onClick={() => onDelete(id)}
          >
            🗑 Delete
          </Button>

        </div>

      </CardContent>

    </Card>
  );
}