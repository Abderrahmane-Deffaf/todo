import { unstable_cache } from "next/cache";
import TodoList from "./TodoList";
import db from "@/utils/db";

const getData = async () => {
  "use server";
  try {
    const todos: Todo[] = await db.todo.findMany({});
    return todos;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getCachedTodos = unstable_cache(
  async () => getData(),
  ["todos"],
  { tags: ["todos"] } // Cache for 60 seconds
);

export default async function GetTodos() {
  const todos = await getCachedTodos();
  return (
    <div className="  p-2">
      <TodoList todos={todos} />
    </div>
  );
}
