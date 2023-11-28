import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import arrow from "../../assets/left-arrow.png";
import { Calendar, DateObject } from "react-multi-date-picker";
import locales from "react-date-object/locales/gregorian_pt_br";
import { useState } from "react";
import star from "../../assets/star.png";
import localizador from "../../assets/localizador.png";

export function DetailReserva({ place }) {
  const [values, setValues] = useState([new DateObject().subtract(-1, "days")]);
  const [starDate, endDate] = values;
  const [timeCheckin, setTimeCheckin] = useState();
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
              <Link to="/produto">
                <img src={arrow} alt="seta de voltar" />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-gray-50 py-2 ">
        <Container>
          <Row className="pb-5">
            <Col lg="8">
              <Row>
                <Col lg="12">
                  <h2 className="pt-4 fw-medium fs-3">Complete seus dados</h2>
                  <div className="bg-white p-4 w-100 rounded">
                    <Row>
                      <Col lg="6">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nome do usuario cadastrado"
                          aria-label="Disabled input example"
                          disabled
                          readOnly
                          className="mb-3"
                        />
                      </Col>
                      <Col lg="6">
                        {" "}
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Sobrenome do usuario cadastrado"
                          aria-label="Disabled input example"
                          disabled
                          readOnly
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        {" "}
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="E-mail do usuario cadastrado"
                          aria-label="Disabled input example"
                          disabled
                          readOnly
                        />
                      </Col>
                      <Col lg="6">
                        {" "}
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={place.location.city}
                          aria-label="Disabled input example"
                          readOnly
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <h2 className="pt-4 fw-medium fs-3">
                    Selecione sua data de reserva
                  </h2>
                  <div className="bg-white p-4 w-100 rounded">
                    <Row>
                      <Col>
                        <Calendar
                          className="m-auto react-multi-date-picker-calendar customDatePickerWidth"
                          style={{ borderRadius: "8px", fontSize: "20px" }}
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
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <h2 className="pt-4 fw-medium fs-3">
                    Seu horário de chegada
                  </h2>
                  <div className="bg-white p-4 w-100 rounded">
                    <Row>
                      <Col lg="12">
                        <p>
                          Seu quarto estará pronto para check-in entre 10h00 e
                          23h00
                        </p>
                      </Col>
                      <Col lg="12">
                        <Form.Select
                          className="w-auto"
                          aria-label="Default select example"
                          required
                          onChange={(event) => {
                            setTimeCheckin(event.target.value);
                          }}
                        >
                          <option key="blankchoice" hidden value>
                            Indique a sua hora prevista de chegada
                          </option>
                          {Array.from(
                            { length: 24 },
                            (_, i) => `${i.toString().padStart(2, "0")}:00`,
                          ).map((hora, i) => (
                            <option key={i} className="text-black" value={hora}>
                              {hora}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="4">
              <Row>
                <h2 className="pt-4 fw-medium fs-3">Detalhe da reserva</h2>
                <div>
                  <img
                    src={place.img[0]}
                    className="img-fluid rounded-top"
                    alt=""
                  />
                  <div className="bg-white p-4 w-100 rounded">
                    <Row>
                      <Col lg={12}>
                        <p className="mt-2 mb-0">{place.category}</p>
                        <h2>{place.title}</h2>
                      </Col>
                    </Row>
                    <p className="mb-2">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </p>
                    <Row>
                      <Col md="auto">
                        <img src={localizador} alt="localizador" />
                      </Col>
                      <Col lg="10" className="ps-0">
                        <p className="m-0">
                          {`${place.location.state}, ${place.location.city},  ${place.location.country} `}
                        </p>
                      </Col>
                    </Row>
                    <div className="bg-primary mt-4 sublinhado" />
                    <div>
                      <Row className="mt-3">
                        <Col lg="6" className="d-flex align-items-center gap-2">
                          <p className="m-0">Check-in: </p>
                        </Col>
                        <Col lg="6">
                          <div>{`${starDate.day} / ${starDate.month} / ${starDate.year}`}</div>
                        </Col>
                      </Row>
                      <div className="bg-primary mt-3 sublinhado" />
                      <Row className="mt-3">
                        <Col lg="6" className="d-flex align-items-center gap-2">
                          <p className="m-0">Check-out: </p>
                        </Col>
                        <Col lg="6">
                          {endDate ? (
                            <div>{`${endDate.day} / ${endDate.month} / ${endDate.year}`}</div>
                          ) : (
                            ""
                          )}
                        </Col>
                      </Row>
                      <div className="bg-primary mt-3 sublinhado" />

                      <Row className="mt-3">
                        <Col lg="6"> Diárias: </Col>
                        <Col lg="6">
                          {starDate && endDate
                            ? endDate.dayOfYear - starDate.dayOfYear
                            : ""}
                        </Col>
                      </Row>
                      <div className="bg-primary mt-3 sublinhado" />
                      <Row className="mt-3">
                        <Col lg="6"> Horario de check-in: </Col>
                        <Col lg="6">{timeCheckin}</Col>
                      </Row>
                      <div className="bg-primary mt-3 sublinhado" />
                    </div>
                    <div className="pt-5 d-flex justify-content-center">
                      <Link to="/reserva/sucesso">
                        <Button
                          disabled={!starDate || !endDate || !timeCheckin}
                        >
                          Adicionar Reserva
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
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
              <li>
                Diretrizes de distanciamento social e outras regulamentações
                relacionadas ao coronavírus se aplicam
              </li>
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
