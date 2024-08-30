"use client";

import { useTransition } from "react";
import { TodoCompleted } from "@/utils/actions";

type TodoProps = {
  todo: Todo;
};

const Todo = ({ todo }: TodoProps) => {
  const [ispending, startTransition] = useTransition();

  return (
    <div
      className={`border rounded-md p-2  cursor-pointer border-black ${
        todo.completed ? "line-through text-gray-500" : " text-red-400"
      }`}
      onClick={() =>
        startTransition(() => TodoCompleted(todo.id, todo.completed))
      }
    >
      {todo.content}
    </div>
  );
};

export default Todo;
