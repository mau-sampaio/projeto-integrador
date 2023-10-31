import Card from "react-bootstrap/Card";
import card1 from "../../assets/card1.png";
import { Link } from "react-router-dom";

export function CardCategory() {
  return (
    <Link to="/login" class="text-decoration-none">
      <Card className=" shadow">
        <Card.Img variant="top" src={card1} />
        <Card.Body>
          <Card.Title>Hotéis</Card.Title>
          <Card.Text>807.105 hotéis</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
