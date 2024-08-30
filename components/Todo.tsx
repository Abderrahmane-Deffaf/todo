import { TodoCompleted } from "@/utils/actions";

type TodoProps = {
  todo: Todo;
};

const Todo = ({ todo }: TodoProps) => {
  return (
    <form action={TodoCompleted}>
      <input type="hidden" name="id" value={todo.id} />
      <input type="hidden" name="completed" value={todo.completed + ""} />
      <button
        type="submit"
        className={`border rounded-md p-2 w-full text-left  cursor-pointer border-black ${
          todo.completed ? "line-through text-gray-500" : " text-red-400"
        }`}
      >
        {todo.content}
      </button>
    </form>
  );
};

export default Todo;
