"use server";

import { revalidateTag } from "next/cache";
import db from "./db";

export const TodoCompleted = async (id: string, completed: boolean) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: !completed,
    },
  });

  revalidateTag("todos");
};

export const newTodo = async (formData: any) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get("content"),
    },
  });
  revalidateTag("todos");
};
