import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar({ user }) {
  return (
    <div className="navbar">
      <p className="nav-item">Welcome, {user}!</p>
      <Link className="btn fourth nav-item" to="/">
        Movies
      </Link>
      <Link className="btn fourth nav-item" to="/actors">
        Actors
      </Link>
    </div>
  );
}

