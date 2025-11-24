import "../css/Navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      {/* HOME */}
      <Link className="anchor-nav" to="/">
        <img src="../LimaLimonLogo.png" alt="logo" className="logo" />
      </Link>

      {/* CATEGORÍAS */}
      <Link className="anchor-nav" to="/category/nuevos">
        Nuevos
      </Link>

      <Link className="anchor-nav" to="/category/tortas">
        Tortas
      </Link>

      <Link className="anchor-nav" to="/category/tartas">
        Tartas
      </Link>

      {/* QUIENES SOMOS / CONTACTO UNIFICADOS */}
      <Link className="anchor-nav" to="/about">
        Sobre Nosotros
      </Link>

      <CartWidget counter={0} />
    </nav>
  );
};

export default Navbar;
