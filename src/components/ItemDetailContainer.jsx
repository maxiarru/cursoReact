import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../mock/AsyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { id } = useParams();
  console.log(id, "id");
  useEffect(() => {
    getOneProduct(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error));
  }, [id]);

  return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;
