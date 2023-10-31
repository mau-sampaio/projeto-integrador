import { Button, Card, Col, Row } from "react-bootstrap";
import card1 from "../../assets/card1.png";
import star from "../../assets/star.png";
import { Link } from "react-router-dom";

export function CardProduct() {
  return (
    <>
      <Card className="d-flex flex-row">
        <Row>
          <Col lg={6}>
            <Card.Img
              variant="top"
              className="object-fit-cover img-fluid h-100 rounded"
              src={card1}
            />
          </Col>
          <Col className="ps-lg-0">
            <Card.Body className="p-2">
              <Row className="mb-3">
                <Col className="pe-0">
                  <p className="m-0">
                    HOTEL <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </p>
                  <h3>Hermitage Hotel</h3>
                </Col>
                <Col
                  xs="auto"
                  className="ps-0 d-flex flex-column align-items-end"
                >
                  <span className="bg-secondary px-3 rounded text-white py-1">
                    8
                  </span>
                  <Card.Text>Muito bom</Card.Text>
                </Col>
              </Row>
              <p className="fs-7 m-0">
                📌A 10940m do centro - <Link to="/login">VER NO MAPA</Link>
              </p>
              <div className="mb-3">📶🏊‍♂️</div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium assumenda
              </p>
              <Button variant="primary" className="w-100" size="lg">
                Ver mais
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}
