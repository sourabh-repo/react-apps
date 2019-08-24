import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

const App = () => {
  const getPage = () =>
    window.location.pathname === "/courses" ? (
      <CoursesPage />
    ) : window.location.pathname === "/about" ? (
      <AboutPage />
    ) : (
      <HomePage />
    );

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
};

export default App;
