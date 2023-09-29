import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoForm from "./components/TodoForm";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/todos/add", element: <TodoForm /> },
  { path: "/todos/edit:id", element: <div>Edit</div> },
]);

export default router;
