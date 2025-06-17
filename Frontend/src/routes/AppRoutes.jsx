import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadSpinner";

const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Project = lazy(() => import("../Pages/Project"));
const Contact = lazy(() => import("../Pages/Contact"));
const ProjectDetail = lazy(() => import("../Components/ProjectDetails"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Moeez Iqbal | Portfolio";
        break;
      case "/about":
        document.title = "About | Moeez Iqbal";
        break;
      case "/project":
        document.title = "Projects | Moeez Iqbal";
        break;
      case "/contact":
        document.title = "Contact | Moeez Iqbal";
        break;
      default:
        if (location.pathname.startsWith("/project/")) {
          document.title = "Project Detail | Moeez Iqbal";
        } else {
          document.title = "Moeez Iqbal Portfolio";
        }
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default AppRoutes;