import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import About from "./components/About";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                mensaje={"Bienvenidos a LimaLimon, tienda de pasteles"}
              />
            }
          />

          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/about" element={<About />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
