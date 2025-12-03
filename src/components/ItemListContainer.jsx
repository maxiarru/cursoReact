import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
// import { products } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = ({ mensaje }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  // firebase

  useEffect(() => {
    setLoading(true);
    // conectar a nuestra coleccion
    const prodCollection = type
      ? query(collection(db, "productos"), where("category", "==", type))
      : collection(db, "productos");
    // pedir los doc
    getDocs(prodCollection)
      .then((res) => {
        //tratamos la promesa
        //console.log(res) // el console log inusable
        //limpiar y obtener datos
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        //console.log(list)
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [type]);

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
        {type && <span className="category-name">{type}</span>}
      </h1>
      {/* Boton para subir productos a firebase */}
      {/* <button onClick={subirData}>SUBIR DATA</button> */}
      {/* <Input/> */}
      <ItemList data={data} />
    </div>
  );
};
export default ItemListContainer;
