import { createBrowserRouter } from "react-router";
import Tasks from "../components/Tasks";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import SpinPage from "../components/SpinPage";
import Login from "../components/Login";
import Signup from "../components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Tasks />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "spinner",
        element: <SpinPage />,
      },
      {
        path: "task/:id"
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  }
]);

export default router;
