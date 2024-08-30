import Link from "next/link";

export default function Home() {
  return (
    <div className=" py-4">
      <div className=" wrapper">
        <h1 className=" font-semibold text-xl">This is a simple Todo App</h1>
        <p>
          Navigate to the Todos:{" "}
          <Link className=" underline" href={"/todos"}>
            Todos
          </Link>
        </p>
      </div>
    </div>
  );
}
