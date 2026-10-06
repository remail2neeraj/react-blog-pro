import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import Error from "../pages/Error";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="blog" element={<Blog />} />

        <Route
          path="blog/:slug"
          element={<BlogDetails />}
        />

        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<Error />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;