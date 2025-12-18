import { Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetIcons = () => {
  const { cartQuantity, cart } = useContext(CartContext);
  // console.log(context)
  return (
    <div>
      <TiShoppingCart fontSize={"1.8rem"} />
      {cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
    </div>
  );
};
export default CartWidgetIcons;
