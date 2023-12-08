import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="app-name">My Todo App</h1>
      <div className="links">
        <Link to="/home"> Home </Link>
        <Link to="/">All Todos</Link>
        <Link to="/create">New Todo</Link>
      </div>
    </nav>
  );
};

export default Navbar;
