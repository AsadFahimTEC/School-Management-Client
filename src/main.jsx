
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Login from "./Security/Login";
import AuthProvider from "./Security/AuthProvider";

import Register from "./Security/Register";
import Notice from "./Components/Notice/Notice";
import Exam from "./Components/Exam/Exam";
import Assignment from "./Components/Assignment/Assignment";
import Attendance from "./Components/Attendance/Attendance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/notice",
    element: <Notice></Notice>
  },
  {
    path: "/exam",
    element: <Exam></Exam>
  },
  {
    path: "/assignment",
    element: <Assignment></Assignment>
  },
  {
    path: "/attendance",
    element: <Attendance></Attendance>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);