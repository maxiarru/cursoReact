import "../css/ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  // const {mensaje}=props
  return (
    <main className="main-container">
      <h1>{mensaje}</h1>
    </main>
  );
};
export default ItemListContainer;
