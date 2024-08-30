import Todo from "./Todo";

type TodoListProps = {
  todos: Todo[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className=" flex  justify-between">
      <div className="basis-[49%] space-y-2">
        <h2 className=" font-semibold text-lg ">Todo 🔄️:</h2>
        {todos.map(
          (todo) => !todo.completed && <Todo key={todo.id} todo={todo} />
        )}
      </div>
      <div className="basis-[49%] space-y-2">
        <h2 className=" font-semibold text-lg ">Done ✅:</h2>

        {todos.map(
          (todo) => todo.completed && <Todo key={todo.id} todo={todo} />
        )}
      </div>
    </div>
  );
};

export default TodoList;
