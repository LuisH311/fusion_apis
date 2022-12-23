import "./css/nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="navegador">
      <nav className="menu">
        {/*   <Link to="/Home"> Home</Link>
        <Link to="/Weather"> Weather</Link>
        <Link to="/apiDivisas"> Api Divisas</Link> */}
        <a href="/">Home</a>
        <a href="/Weather">Weather</a>
        <a href="/apiDivisas">apiDivisas</a>
        <a href="/Homes">Music</a>
      </nav>
    </div>
  );
};
