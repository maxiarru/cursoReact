import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  // firebase

  useEffect(() => {
    setLoading(true);
    const prodCollection = categoryId
      ? query(collection(db, "productos"), where("category", "==", categoryId))
      : collection(db, "productos");
    getDocs(prodCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(list);
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
  // Para subir productos a firebase
  // const subirData = () => {
  //   const collSubir = collection(db, "productos");
  //   products.map((prod) => addDoc(collSubir, prod));
  // };

  return (
    <div>
      <h1 className="category-title">
        {mensaje}
        {categoryId && <span className="category-name">{categoryId}</span>}
      </h1>
      {/* Boton para subir productos a firebase */}
      {/* <button onClick={subirData}>SUBIR DATA</button> */}
      {/* <Input/> */}
      <ItemList data={data} />
    </div>
  );
};
export default ItemListContainer;
