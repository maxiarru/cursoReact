import "../css/CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({ counter }) => {
  return (
    <div className="cartwidget">
      <FaShoppingCart size={24} color="darkkhaki" />
      <span>{counter}</span>
    </div>
  );
};
export default CartWidget;
