import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/todos/add", element: <AddTodo /> },
  { path: "/todos/edit/:taskId", element: <EditTodo /> },
]);

export default router;
