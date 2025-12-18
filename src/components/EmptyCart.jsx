import React from "react";
import { Link } from "react-router-dom";
import "../css/EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="emptycart-container">
      <h1 className="emptycart-title">El carrito está vacío</h1>
      <h3 className="emptycart-subtitle">
        Te invitamos a ver nuestros productos
      </h3>

      <Link className="emptycart-btn" to="/">
        Ir a Home
      </Link>
    </div>
  );
};

export default EmptyCart;
