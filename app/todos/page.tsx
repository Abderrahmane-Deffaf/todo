import GetTodos from "@/components/GetTodos";
import NewTodoForm from "@/components/NewTodoForm";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <main className=" py-4">
        <div className=" space-y-8 wrapper">
          <NewTodoForm />
          <Suspense fallback={<div>Loading</div>}>
            <GetTodos />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
