import "../css/ItemDetail.css";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ detalle }) => {
  const [purchase, setPurchase] = useState(false);
  const { addItem, itemQuantity } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);
  };
  const stockActualizado = detalle.stock - itemQuantity(detalle.id);
  return (
    <div className="item-detail-container">
      <img src={detalle.img} alt={detalle.name} className="item-detail-image" />

      <div className="item-detail-info">
        <h2 className="item-detail-title">{detalle.name}</h2>

        <p className="item-detail-price">${detalle.price}</p>

        <p className="item-detail-description">{detalle.description}</p>

        <p className="item-detail-stock">
          Stock disponible: {stockActualizado} unidades
        </p>

        {purchase ? (
          <Link className="btn btn-dark" to="/cart">
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={stockActualizado} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
