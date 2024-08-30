import GetTodos from "@/components/GetTodos";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <GetTodos />
      </Suspense>
    </div>
  );
}
