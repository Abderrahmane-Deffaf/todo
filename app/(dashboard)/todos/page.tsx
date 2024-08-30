import TodoList from "@/components/TodoList";
import db from "@/utils/db";
import { unstable_cache } from "next/cache";

const getData = async () => {
  "use server";
  const todos: Todo[] = await db.todo.findMany({});

  return todos;
};

const getCachedTodos = unstable_cache(
  async () => getData(),
  ["todos"],
  { tags: ["todos"] } // Cache for 60 seconds
);

const TodosPage = async () => {
  const todos = await getCachedTodos();
  return (
    <div className="  p-2">
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
