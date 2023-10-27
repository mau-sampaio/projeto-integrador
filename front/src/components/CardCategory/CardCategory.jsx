import Card from "react-bootstrap/Card";
import card1 from "../../assets/card1.png";

export function CardCategory() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={card1} />
        <Card.Body>
          <Card.Title>Hotéis</Card.Title>
          <Card.Text>807.105 hotéis</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
