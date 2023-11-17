import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ImageSkeleton } from "../ImageSkeleton/ImageSkeleton";

export function CardCategory({ urlImg, title, count }) {
  const [loading, setLoading] = useState(true);

  return (
    <Link to="/login" class="text-decoration-none">
      <Card className=" shadow">
        <Card.Img
          variant="top"
          src={urlImg}
          className={`thumbnail object-fit-cover ${loading ? "d-none" : ""}`}
          onLoad={() => setLoading(false)}
        />
        {loading && <ImageSkeleton heigth={300} />}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`${count} - ${title.toLowerCase()}`}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
