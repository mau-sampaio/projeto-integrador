import { Button, Card, Col, Row } from "react-bootstrap";
import star from "../../assets/star.png";
import { Link } from "react-router-dom";

export function CardProduct({
  urlImg,
  title,
  category,
  description,
  slug,
  distance,
  review,
}) {
  const stars = Math.floor(review / 2) || 5;
  return (
    <>
      <Card className="overflow-hidden">
        <Row>
          <Col lg={6} className="position-relative ">
            <Card.Img
              variant="top"
              className="object-fit-cover img-fluid h-100  d-lg-none thumbnail"
              src={urlImg}
            />
            <div
              className=" d-none d-lg-block position-absolute w-100 h-100 bg-cover"
              style={{ backgroundImage: `url(${urlImg})` }}
            />
          </Col>
          <Col>
            <Card.Body className="p-2">
              <Row className="mb-3">
                <Col className="pe-0">
                  <p className="m-0">
                    <span className="pe-2">{category}</span>
                    {Array.from(Array(stars)).map((_, index) => (
                      <img src={star} alt="" key={index} />
                    ))}
                  </p>
                  <h3>{title}</h3>
                </Col>
                <Col
                  xs="auto"
                  className="ps-0 d-flex flex-column align-items-end"
                >
                  <span className="bg-secondary px-3 rounded text-white py-1">
                    {review}
                  </span>
                  <Card.Text>{review > 7 ? "Muito Bom" : "Bom"}</Card.Text>
                </Col>
              </Row>
              <p className="fs-7 m-0">
                📌 {distance} -
                <Link to={`/produto/${slug}`} target="_blank">
                  VER NO MAPA
                </Link>
              </p>
              <div className="mb-3">📶🏊‍♂️</div>
              <p className="description">{description}</p>
              <Link to={`/produto/${slug}`} target="_blank">
                <Button variant="primary" className="w-100" size="lg">
                  Ver mais
                </Button>
              </Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}
