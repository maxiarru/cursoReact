import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        if (categoryId) {
          setData(res.filter((prod) => prod.category === categoryId));
        } else {
          setData(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <h1 className="category-title">
        {mensaje}
        {categoryId && <span className="category-name">{categoryId}</span>}
      </h1>
      {/* <Input/> */}
      <ItemList data={data} />
    </div>
  );
};
export default ItemListContainer;
