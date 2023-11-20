import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import star from "../../assets/star.png";
import arrow from "../../assets/left-arrow.png";
import localizador from "../../assets/localizador.png";
import cozinha from "../../assets/itens/contem-kitchen.png";
import ar from "../../assets/itens/contem-ar.png";
import estacionamento from "../../assets/itens/contem-estacionamento.png";
import pet from "../../assets/itens/contem-pet.png";
import tv from "../../assets/itens/contem-tv.png";
import wifi from "../../assets/itens/contem-wifi.png";
import piscina from "../../assets/itens/piscina.png";
import { Calendar, DateObject } from "react-multi-date-picker";
import locales from "react-date-object/locales/gregorian_pt_br";
import { useState } from "react";
import { GaleryProduct } from "../GaleryProduct/GaleryProduct";
import MapsApi from "../MapsApi/MapsApi";
import calendario from "../../assets/calendario.png";
import GaleryMobile from "../GaleryMobile/GaleryMobile";

export function DetailCard({ place }) {
  const [values, setValues] = useState([new DateObject().subtract(-1, "days")]);
  const [starDate, endDate] = values;
  return (
    <>
      <div className="bg-secondary py-1 text-white">
        <Container>
          <Row>
            <Col lg={6}>
              <p className="mt-2 mb-0">{place.category}</p>
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
              <p className="m-0">{`${place.location.state}, ${place.location.city},  ${place.location.country} `}</p>
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
      <div className="d-lg-none pb-4">
        <GaleryMobile imagens={place.img} />
      </div>
      <Container>
        <div className="d-none d-lg-block">
          <GaleryProduct imagens={place.img} />
        </div>
        <h2>{`Fique no coração de ${place.location.state}`} </h2>
        <p>{place.description}</p>
        <h2 className="pt-4">O que esse lugar oferece?</h2>
      </Container>
      <div className="bg-primary sublinhado" />
      <Container>
        <Row className="text-center pt-4">
          <Col xs={12} md={6} lg={3}>
            <img src={cozinha} alt="icone de cozinha" />
            <p>Cozinha</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={tv} alt="icone de tv" />
            <p>Televisor</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={ar} alt="icone de ar" />
            <p>Ar condicionado</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={pet} alt="icone de pet" />
            <p>Aceita Pets</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={estacionamento} alt="icone de estacionamento" />
            <p>Estacionamento</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={piscina} alt="icone de Piscina" />
            <p>Piscina</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img src={wifi} alt="icone de Wifi" />
            <p>Wifi</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <p />
          </Col>
        </Row>
      </Container>
      <div className="bg-gray-50  py-4  ">
        <Container>
          <Row>
            <Col className="align-items-center d-flex ">
              <Calendar
                className="m-auto react-multi-date-picker-calendar customDatePickerWidth"
                locale={locales}
                numberOfMonths={2}
                disableMonthPicker
                disableYearPicker
                value={values}
                onChange={setValues}
                range
                minDate={new DateObject().subtract(-1, "days")}
                maxDate={new DateObject().add(30, "days")}
                rangeHover
              />
            </Col>
            <Col>
              <div className="bg-white p-4 w-100 rounded">
                <h3>DATAS SELECIONADAS:</h3>
                <div>
                  <Row>
                    <Col lg="6" className="d-flex align-items-center gap-2">
                      <img src={calendario} alt="calendario" />
                      <div>
                        <p className="m-0">Check-in: </p>
                        <div>{`${starDate.day} / ${starDate.month} / ${starDate.year}`}</div>
                      </div>
                    </Col>
                    <Col lg="6" className="d-flex align-items-center gap-2">
                      <img src={calendario} alt="calendario" />
                      <div>
                        <p className="m-0">Check-out: </p>
                        {endDate ? (
                          <div>{`${endDate.day} / ${endDate.month} / ${endDate.year}`}</div>
                        ) : (
                          <span>Data</span>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <div className="pt-2 d-flex justify-content-center">
                    <Link to="/reserva">
                      <Button disabled={!starDate || !endDate}>
                        Adicionar Reserva
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <h2 className="pt-4">Onde você vai estar?</h2>
      </Container>
      <div className="bg-primary sublinhado " />
      <Container>
        <p className="pt-4">{`${place.location.state}, ${place.location.country}`}</p>
        <MapsApi />
      </Container>
      <Container>
        <h2 className="pt-4">O que você precisa saber:</h2>
      </Container>
      <div className="bg-primary sublinhado" />
      <Container>
        <Row className="pt-4">
          <Col xs={12} md={6} lg={4}>
            <h3>Regras da casa</h3>
            <ul>
              <li>Check-out: 10:00</li>
              <li>Não é permitido festas</li>
              <li>Não fumar</li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h3>Saúde e segurança</h3>
            <ul>
              <li>Detector de fumaça</li>
              <li>Depósito de segurança</li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h3>Política de cancelamentoa</h3>
            <ul>
              <li>Totalmente reembolsável</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
