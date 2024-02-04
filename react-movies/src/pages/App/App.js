import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesListPage from '../MovieList/MoviesListPage.jsx';
import MovieDetailPage from '../MovieDetails/MovieDetailPage.jsx';
import ActorListPage from '../ActorListPage/ActorListPage.js';
import NavBar from "../../components/NavBar/NavBar";
import LoginPage from '../LoginPage/LoginPage';
import { movies } from "../../data.js";
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage';
import ActorsListPage from '../ActorListPage/ActorListPage';




export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router> 
      <div className="App">
        <header className="App-header">
          {user && <NavBar user={user} />}
        </header>
        <div className="App-body">
          <Routes>
            {user ? (
              <>
                <Route path="/actors" element={<ActorsListPage />} />
                <Route path="/" element={<MoviesListPage />} />
                <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
                <Route path="/actors" element={<ActorListPage />} />
                <Route path="/actors/:actorName" element={<ActorDetailPage />} />
              </>
            ) : (
              <Route path="/" element={<LoginPage setUser={setUser} />} />
            )}
      </Routes>
        </div>
      </div>
    </Router>
  );
}