import "./css/nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="navegador">
      <nav className="menu">
        {/*   <Link to="/Home"> Home</Link>
        <Link to="/Weather"> Weather</Link>
        <Link to="/apiDivisas"> Api Divisas</Link> */}
        <a href="/">Inicio</a>
        <a href="/Weather">Metereología</a>
        <a href="/apiDivisas">Convertidor de Divisas</a>
        <a href="/Homes">Reproductor de Musica</a>
      </nav>
    </div>
  );
};
