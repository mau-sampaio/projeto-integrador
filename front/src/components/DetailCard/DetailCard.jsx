import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import star from "../../assets/star.png";
import arrow from "../../assets/left-arrow.png";
import localizador from "../../assets/localizador.png";
import cozinha from "../../assets/contem-kitchen.png";
import { Calendar } from "react-multi-date-picker";

export function DetailCard({ place }) {
  return (
    <>
      <div className="bg-secondary py-4 text-white">
        <Container>
          <Row>
            {/* nome do hotel e seta para volta */}
            <Col lg={6}>
              <p>{place.category}</p>
              <h1>{place.title}</h1>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-end align-items-center"
            >
              <Link to="/">
                <img src={arrow} alt="seta de voltar" />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-gray-50 py-2 ">
        <Container>
          <Row className="">
            <Col md="auto">
              <img src={localizador} alt="localizador" />
            </Col>
            <Col lg="8" className="ps-0">
              <p className="m-0">{place.location}</p>
              <p className="m-0">{place.distance}</p>
            </Col>
            <Col md="auto" className="ms-auto">
              <Row>
                <Col xs="auto">
                  <p className="m-0">Muito bom</p>
                  <p className="m-0">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </p>
                </Col>
                <Col xs="auto">
                  <span className="bg-secondary px-3 rounded text-white py-1">
                    8
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        {/* 05 fotos */}
        <Row className="py-4">
          {/* img grande */}
          <Col lg="6">
            <img src={place.img[0]} className="img-fluid rounded-2" alt="" />
          </Col>
          {/* 04 img */}
          <Col lg="6">
            {/* linha superior */}
            <Row className="row-gap-3">
              <Col lg="6">
                <img
                  src={place.img[1]}
                  className="img-fluid rounded-2"
                  alt=""
                />
              </Col>
              <Col lg="6">
                <img
                  src={place.img[2]}
                  className="img-fluid rounded-2"
                  alt=""
                />
              </Col>
              {/* linha inferior */}
              <Col lg="6">
                <img
                  src={place.img[3]}
                  className="img-fluid rounded-2"
                  alt=""
                />
              </Col>
              <Col lg="6">
                <img
                  src={place.img[4]}
                  className="img-fluid rounded-2"
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <h2>Fique no coração de Buenos Aires</h2>
        <p>{place.description}</p>

        <h2 className="pt-4">O que esse lugar oferece?</h2>
      </Container>
      <div className="bg-primary py-1 " />
      <Container>
        <Row className="text-center pt-4">
          <Col>
            <div>
              <img src={cozinha} alt="icone de cozinha" />
              <p>Cozinha</p>
            </div>
          </Col>
          <Col>
            <img src={cozinha} alt="icone de cozinha" />
            <p>Estacionamento gratuito</p>
          </Col>
          <Col>
            <img src={cozinha} alt="icone de cozinha" />
            <p>Cozinha</p>
          </Col>
          <Col>
            <img src={cozinha} alt="icone de cozinha" />
            <p>Cozinha</p>
          </Col>
        </Row>
        <Row className="text-center  pt-4">
          <Col>
            <img src={cozinha} alt="icone de cozinha" />
            <p>Cozinha</p>
          </Col>
          <Col>
            <img src={cozinha} alt="icone de cozinha" />
            <p>Cozinha</p>
          </Col>
          <Col>
            <img src={cozinha} alt="icone de cozinha" />
            <p>Cozinha</p>
          </Col>
          <Col>
            <img src={cozinha} alt="icone de cozinha" />
            <p>Cozinha</p>
          </Col>
        </Row>
      </Container>
      <div className="bg-gray-50  py-4  ">
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <Calendar
                numberOfMonths={2}
                disableMonthPicker
                disableYearPicker
              />
            </Col>
            <Col>
              <button>Adicionar Reserva</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
