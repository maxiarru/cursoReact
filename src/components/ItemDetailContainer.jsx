import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
// import { getOneProduct } from "../mock/AsyncMock";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import LoaderComponent from "./LoaderComponent";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [cargando, setCargando] = useState(true);
  const [invalid, setInvalid] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // creo referencia
    const docRef = doc(db, "productos", id);
    // traigo el doc item
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, []);

  // useEffect(() => {
  //   getOneProduct(id)
  //     .then((res) => setDetalle(res))
  //     .catch((error) => console.log(error));
  // }, [id]);
  if (invalid) {
    return (
      <div>
        <h1>El producto no existe! 😭</h1>
        <Link className="btn btn-dark" to="/">
          Volver a Home
        </Link>
      </div>
    );
  }
  return (
    <>
      {cargando ? (
        <LoaderComponent text={"Cargando detalle de producto"} />
      ) : (
        <ItemDetail detalle={detalle} />
      )}
    </>
  );
};

export default ItemDetailContainer;
