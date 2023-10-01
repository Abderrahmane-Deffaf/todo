'use client'


import { useTransition } from "react"
import {TodoCompleted} from '@/utils/actions'


const Todo = ({todo}) => {
  const [ispending, startTransition] = useTransition()


  return (
    <div
      className={`border  cursor-pointer border-black ${
        todo.completed ? "line-through text-gray-500" : " text-red-400"
      }`}
      onClick={() => startTransition(() => TodoCompleted(todo.id))}
    >
      {todo.content}
    </div>
  );
}

export default Todo 