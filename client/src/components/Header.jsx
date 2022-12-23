import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <div className="nav-container w-full">
      <nav className="bg-red-400 bg-opacity-70 flex items-center justify-center gap-5 p-5">
        <Link to="/">
          <img
            src={logo}
            width="0"
            height="0"
            alt="pokemon-logo"
            className="w-60"
          />
        </Link>
      </nav>
    </div>
  );
}
