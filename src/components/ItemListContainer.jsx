import "../css/ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  // const {mensaje}=props
  return (
    <div className="main-container">
      <h1>{mensaje}</h1>
    </div>
  );
};
export default ItemListContainer;
