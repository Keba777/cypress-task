import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/todos/add", element: <div>Add</div> },
  { path: "/todos/edit:id", element: <div>Edit</div> },
  { path: "/todos/remove:id", element: <div>Delete</div> },
]);

export default router;
