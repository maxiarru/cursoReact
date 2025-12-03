import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [validMail, setValidMail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);
  const [process, setProcess] = useState(false);
  const { cart, clear, total } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };
  const soloLetras = (text) => /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(text);

  console.log(buyer);
  const finalizarCompra = (e) => {
    e.preventDefault(); //para no hacer que el form actualice toda la pestaña

    // VALIDACIÓN 1: campos vacíos
    if (!buyer.name || !buyer.lastname || !buyer.email || !validMail) {
      setError("Por favor complete todos los campos");
      return;
    }

    // VALIDACIÓN 2: emails iguales
    if (buyer.email !== validMail) {
      setError("Los correos no coinciden");
      return;
    }

    // VALIDACIÓN 3: nombre válido
    if (!soloLetras(buyer.name) || !soloLetras(buyer.lastname)) {
      setError("El nombre y apellido solo deben contener letras.");
      return;
    }
    // VALIDACIÓN 4: nombre debe tener mas de 2 letras
    if (buyer.name.length < 2) {
      setError("El nombre y apellido deben tener al menos 2 caracteres.");
      return;
    }
    setError(null);
    setProcess(true);
    let orden = {
      comprador: buyer,
      compras: cart,
      total: total(), //llamar la ala funcion total de tu contexto
      fecha: serverTimestamp(),
    };
    const ventas = collection(db, "orders");
    //agregar el doc
    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => console.log(error))
      .finally(() => setProcess(false));
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }
  return (
    <>
      {orderId ? (
        <div>
          <h2>Muchas gracias por su compra</h2>
          <h4>Su orden es: {orderId}</h4>
          <Link className="btn btn-dark" to="/">
            Volver a Home
          </Link>
        </div>
      ) : (
        <div>
          <h1>Complete por favor los datos</h1>
          {error && (
            <span style={{ color: "red", fontWeight: "bold" }}>{error}</span>
          )}
          <form
            className="p-4 border rounded shadow-sm bg-light"
            onSubmit={finalizarCompra}
          >
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="Ingrese su nombre"
              onChange={buyerData}
            />
            <input
              className="form-control"
              name="lastname"
              type="text"
              placeholder="Ingrese su apellido"
              onChange={buyerData}
            />
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="Ingrese su correo"
              onChange={buyerData}
            />
            <input
              className="form-control"
              name="email2"
              type="email"
              placeholder="Repita su correo"
              onChange={(e) => setValidMail(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-success"
              disabled={process}
            >
              {process ? "Procesando Orden..." : "Generar Orden"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
