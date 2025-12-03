import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <h1> El carrito esta vacio</h1>
      <h3>Te ivitamos a ver nuestros productos</h3>
      <Link className="btn btn-dark" to="/">
        {" "}
        Ir a Home
      </Link>
    </div>
  );
};

export default EmptyCart;
