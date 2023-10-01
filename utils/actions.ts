'use server'

import { revalidatePath } from 'next/cache'
import db from './db'

export const TodoCompleted = async (id) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  });

  revalidatePath("/todos");
};


export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data:{
      content: formData.get('content')
    }
  })
  revalidatePath('./todos')
}

