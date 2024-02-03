import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesListPage from '../MovieList/MoviesListPage.jsx';
import MovieDetailPage from '../MovieDetails/MovieDetailPage.jsx';
import ActorListPage from '../ActorListPage';
import NavBar from "../../components/NavBar/NavBar";
import LoginPage from '../LoginPage/LoginPage';
import { movies } from "../../data.js";




export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {user && <NavBar user={user} />}
        </Router>
      </header>
      <div className="App-body">
        <Router>
          <Routes>
            {user ? (
              <>
                <Route path="/" element={<MoviesListPage />} />
                <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
                <Route path="/actors" element={<ActorListPage />} />
              </>
            ) : (
              <Route path="/" element={<LoginPage setUser={setUser} />} />
            )}
          </Routes>
        </Router>
      </div>
    </div>
  );
}