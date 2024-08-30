"use server";

import { revalidateTag } from "next/cache";
import db from "./db";

export const TodoCompleted = async (formData: any) => {
  const id = formData.get("id");
  let completed = formData.get("completed");
  if (completed == "true") {
    completed = false;
  } else {
    completed = true;
  }
  try {
    await db.todo.update({
      where: { id },
      data: {
        completed: completed,
      },
    });

    revalidateTag("todos");
  } catch (error) {
    console.log(error);
  }
};

export const newTodo = async (formData: any) => {
  try {
    await db.todo.create({
      data: {
        content: formData.get("content"),
      },
    });
    revalidateTag("todos");
  } catch (error) {
    console.log(error);
  }
};
