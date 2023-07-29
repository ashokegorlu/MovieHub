import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MovieList from "./components/MovieList";
import CompanyInfo from "./components/CompanyInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MovieList />} />
        <Route path="/company-info" element={<CompanyInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
