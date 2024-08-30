import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return (
    <form action={newTodo} className=" space-y-4">
      <div className=" flex flex-col gap-2">
        <label htmlFor="content">Add new todo</label>
        <input
          name="content"
          id="content"
          type="text"
          required
          placeholder="content"
          className="border px-1 max-w-[400px] rounded-md text-xl border-black"
        />
      </div>

      <button
        className=" bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500/90"
        type="submit"
      >
        Create Todo
      </button>
    </form>
  );
};

export default NewTodoForm;
