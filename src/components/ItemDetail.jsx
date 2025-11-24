import "../css/ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades del producto ${detalle.name}`);
  };

  return (
    <div className="item-detail-container">
      <img src={detalle.img} alt={detalle.name} className="item-detail-image" />

      <div className="item-detail-info">
        <h2 className="item-detail-title">{detalle.name}</h2>

        <p className="item-detail-price">${detalle.price}</p>

        <p className="item-detail-description">{detalle.description}</p>

        <p className="item-detail-stock">
          Stock disponible: {detalle.stock} unidades
        </p>

        <ItemCount stock={detalle.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
