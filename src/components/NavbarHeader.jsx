import "../css/Navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
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

      <Link to="/cart" className="anchor-nav">
        <CartWidget counter={cart.length} />
      </Link>
    </nav>
  );
};

export default Navbar;
