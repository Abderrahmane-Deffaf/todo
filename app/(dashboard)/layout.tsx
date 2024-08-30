import NewTodoForm from "@/components/NewTodoForm";
import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className=" py-4">
      <div className=" space-y-8 wrapper">
        <NewTodoForm />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
