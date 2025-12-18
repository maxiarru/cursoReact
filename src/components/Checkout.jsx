import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import EmptyCart from "./EmptyCart";
import "../css/Checkout.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [validMail, setValidMail] = useState("");
  const [process, setProcess] = useState(false);
  const { cart, clear, total } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const soloLetras = (text) => /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(text);

  const finalizarCompra = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.lastname || !buyer.email || !validMail) {
      toast.error("Por favor complete todos los campos");
      return;
    }

    if (buyer.email !== validMail) {
      toast.error("Los correos no coinciden");
      return;
    }

    if (!soloLetras(buyer.name) || !soloLetras(buyer.lastname)) {
      toast.error("El nombre y apellido solo deben contener letras.");
      return;
    }

    if (buyer.name.length < 3) {
      toast.error("El nombre debe tener al menos 3 caracteres.");
      return;
    }

    if (buyer.lastname.length < 3) {
      toast.error("El apellido debe tener al menos 3 caracteres.");
      return;
    }

    setProcess(true);

    const orden = {
      comprador: buyer,
      compras: cart,
      total: total(),
      fecha: serverTimestamp(),
    };

    const ventas = collection(db, "orders");

    addDoc(ventas, orden)
      .then((res) => {
        clear();

        Swal.fire({
          title: "Compra realizada con éxito",
          html: `Tu número de orden es:<br><strong>${res.id}</strong>`,
          icon: "success",
          confirmButtonText: "Volver al Home",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          window.location.href = "/";
        });
      })
      .catch(() => {
        toast.error("Error al procesar la orden");
      })
      .finally(() => setProcess(false));
  };

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Complete sus datos</h1>

      <form className="checkout-form" onSubmit={finalizarCompra}>
        <input
          className="checkout-input"
          name="name"
          type="text"
          placeholder="Ingrese su nombre"
          onChange={buyerData}
        />

        <input
          className="checkout-input"
          name="lastname"
          type="text"
          placeholder="Ingrese su apellido"
          onChange={buyerData}
        />

        <input
          className="checkout-input"
          name="email"
          type="email"
          placeholder="Ingrese su correo"
          onChange={buyerData}
        />

        <input
          className="checkout-input"
          name="email2"
          type="email"
          placeholder="Repita su correo"
          onChange={(e) => setValidMail(e.target.value)}
        />

        <button type="submit" className="checkout-btn" disabled={process}>
          {process ? "Procesando Orden..." : "Generar Orden"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
