import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesListPage from '../MoviesListPage';
import MovieDetailPage from '../MovieDetailPage';
import ActorListPage from '../ActorListPage';
import NavBar from "../../components/NavBar/NavBar";
import LoginPage from '../LoginPage/LoginPage';
import { movies } from "../../data.js";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {user && <NavBar user={user} />}
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </>
        ) : (
          <Route path="/" element={<LoginPage setUser={setUser} />} />
        )}
      </Routes>
    </Router>
  );
}

