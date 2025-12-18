import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../css/CartView.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);

  const handleClearCart = () => {
    Swal.fire({
      title: "¿Vaciar carrito?",
      text: "Se eliminarán todos los productos",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
        Swal.fire({
          title: "Carrito vaciado",
          icon: "success",
          timer: 1800,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Tu carrito 🛒</h1>

      <div className="cart-items">
        {cart.map((compra) => (
          <div className="cart-item" key={compra.id}>
            <img className="cart-item-img" src={compra.img} alt={compra.name} />

            <div className="cart-item-info">
              <span className="cart-item-name">{compra.name}</span>
              <span className="cart-item-unit">Precio: ${compra.price}</span>
              <span className="cart-item-qty">Cantidad: {compra.quantity}</span>
              <span className="cart-item-total">
                Subtotal: ${compra.price * compra.quantity}
              </span>
            </div>

            <button
              className="cart-remove-btn"
              onClick={() => {
                removeItem(compra.id);
                toast.info(`Eliminaste: ${compra.name}`, {
                  position: "top-right",
                  autoClose: 2000,
                });
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <span className="cart-total">Total a pagar: ${total()}</span>

        <div className="cart-buttons">
          <button className="cart-clear-btn" onClick={handleClearCart}>
            Vaciar carrito
          </button>

          <Link className="cart-checkout-btn" to="/checkout">
            Terminar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;
