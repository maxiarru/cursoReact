import "../css/Navbar.css";
import CartWidget from "./CartWidget";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <a className="anchor-nav" href="">
        <img src="../LimaLimonLogo.png" alt="logo" className="logo" />
      </a>
      <a className="anchor-nav" href="">
        Nuevos
      </a>
      <a className="anchor-nav" href="">
        Productos
      </a>
      <a className="anchor-nav" href="">
        Contacto
      </a>
      <a className="anchor-nav" href="">
        Quienes Somos
      </a>
      <CartWidget counter={0} />
    </nav>
  );
};

export default Navbar;
