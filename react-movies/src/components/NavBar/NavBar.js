import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar({ user }) {
  return (
    <div className="navbar">
      <Link className="nav-item" to="/">
        <button className="btn fourth">Movies</button>
      </Link>
      <Link className="nav-item" to="/actors">
        <button className="btn fourth">Actors</button>
      </Link>
      <p className="nav-item">Welcome, {user}!</p>
    </div>
  );
}