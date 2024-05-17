import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-custom-alert";
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
import StudentProfile from "./components/StudentProfile";
import Header from "./components/Header";
import appStore from "./utils/store";
import TeacherRegisterPage from "./components/TeacherRegisterPage";
import FAQ from "./components/FAQ";
import TermsAndConditions from "./utils/TermsAndConditions";
import Enquiry from "./components/Enquiry";
import PaymentService from "./utils/PaymentPage";

const AppLayout = () => {
  return (
    <div className="container w-full overflow-hidden text-white">
      <Provider store={appStore}>
        <ToastContainer floatingTime={3000} />
        <Header />
        <Outlet />
        <Footer />
      </Provider>
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
        path: "/class",
        element: <Class />,
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
      {
        path: "/profile/student",
        element: <StudentProfile />,
      },
      {
        path: "/teacherRegistration",
        element: <TeacherRegisterPage />,
      },
      {
        path: "/faqs",
        element: <FAQ />,
      },
      {
        path: "/termsandconditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/enquiry",
        element: <Enquiry/>,
      },
      {
        path: "/payments",
        element: <PaymentService/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
