import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Item.css";

const Item = ({ prod }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.img} className="item-card-image" />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>${prod.price},00</Card.Text>
        <Link className="btn btn-primary" to={`/item/${prod.id}`}>
          Ver Más
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
