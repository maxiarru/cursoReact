import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer
        mensaje={"Bienvenidos a LimaLimon, tienda de pasteles."}
      />
    </>
  );
}

export default App;
