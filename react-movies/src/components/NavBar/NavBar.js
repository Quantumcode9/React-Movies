import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar({ user }) {
  

  return (
    <div className="flex-container">
      <Link className="flex-item" to="/">
        <button className="btn fourth">Movies</button>
      </Link>
      <Link className="flex-item" to="/actors">
        <button className="btn fourth">Actors</button>
      </Link>
      <p className="flex-item">Welcome, {user}!</p>
    </div>
  );
}
  
  
//   return (
//     <nav className="navBar">
//       <Link to="/">Home</Link>
//       <Link to="/">Movies List</Link>  
//       <Link to="/actors">Actors List</Link>
//     </nav>
//   );
// }
