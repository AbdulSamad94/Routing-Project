import React from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import "./index.css";
import User from "./components/User/User";
import Github from "./components/Github/Github";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  </HashRouter>
);
