import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Teachers from "./components/AllTeachers";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Class from "./components/Class";
import TeachersProfile from "./components/TeachersProfile";
import VideoPopUp from "./components/VideoPop";

const AppLayout = () => {
  return (
    <div className="container w-screen overflow-hidden text-white">
      <Outlet  />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/teacher",
        element: <Teachers />,
      },
      {
        path: "/teacher-profile/:id",
        element: <TeachersProfile />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/class",
        element: <Class />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
