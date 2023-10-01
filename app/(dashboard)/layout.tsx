import NewTodoForm from "@/components/NewTodoForm";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <NewTodoForm />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
