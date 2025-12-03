import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoLS);

  //seteamos y actualizamos el local storage cada vez que el carrito cambia
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  console.log(cart, "carrito");
  //agregar un item al carrito, contempla duplicados
  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      //forma larga
      //existe, sumo cantidades
      // const carritoActualizado = cart.map((prod)=>{
      //     if(prod.id === item.id){
      //         //encuentra al repetido dentro del array
      //         //suimar cantidades
      //         return {...prod, quantity: prod.quantity + qty}
      //     }else{
      //         //retorno sin modificar
      //         return prod
      //     }
      // })
      // setCart(carritoActualizado)

      //corta
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            //encuentra al repetido dentro del array
            //suimar cantidades
            return { ...prod, quantity: prod.quantity + qty };
          } else {
            //retorno sin modificar
            return prod;
          }
        })
      );
    } else {
      //no existe, lo agrego tal cual
      setCart([...cart, { ...item, quantity: qty }]);
    }
    // console.log({...item, quantity:qty})
  };
  //borre todo el carrito
  const clear = () => {
    setCart([]);
  };

  //borrar un item del carrito
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  //devuelve un booleano si esta o no en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  //total a pagar
  const total = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity * prod.price), 0);
  };
  //ejemplo impuestos
  const totalConImpuestos = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity * prod.price), 1.5);
  };
  //total a items En el carrito (sumatoria de cantidades)
  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  //OPCIONAL
  const itemQuantity = (id) => {
    const itemInCart = cart.find((prod) => prod.id === id);

    if (itemInCart) {
      return itemInCart.quantity;
    } else {
      //no existe
      return 0;
    }
  };

  //funciones que modifiquen ese estado (setCart)
  // const cajitaDeHerramientas = {}
  return (
    <CartContext.Provider
      value={{
        cart,
        clear,
        removeItem,
        addItem,
        itemQuantity,
        total,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
