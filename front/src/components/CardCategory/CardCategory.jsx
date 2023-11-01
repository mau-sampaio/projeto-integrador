import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export function CardCategory({ urlImg, title, count }) {
  return (
    <Link to="/login" class="text-decoration-none">
      <Card className=" shadow">
        <Card.Img
          variant="top"
          src={urlImg}
          className="thumbnail object-fit-cover"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`${count} - ${title.toLowerCase()}`}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
