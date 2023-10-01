import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return (
    <form action={newTodo}>
      <input name="content" type="text" className="border border-black" />
      <button type="submit">create todo</button>
    </form>
  );
}

export default NewTodoForm