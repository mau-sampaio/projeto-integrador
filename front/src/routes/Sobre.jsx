import { ContainerCenter } from "../components/ContainerCenter";
import video from "../assets/video/video.mp4";
import videoBanner from "../assets/videoBanner.jpg";
import { Col, Container, Row } from "react-bootstrap";
import bruno from "../assets/devs/bruno.jpg";
import isaias from "../assets/devs/isaias.jpg";
import mauricio from "../assets/devs/mauricio.jpg";
import rogerio from "../assets/devs/rogerio.jpg";
import ronaldo from "../assets/devs/ronaldo.jpg";
import vanessa from "../assets/devs/vanessa.jpg";

export function Sobre() {
  return (
    <>
      <ContainerCenter>
        <Container>
          <div className="rounded p-4 bg-white shadow align-self-center h100">
            <h2 className="fw-bold text-primary text-center">
              Conheça a DigitalBooking.com
            </h2>
            <p>
              A DigitalBooking.com é um resultado de uma aplicação prática dos
              conceitos teóricos vistos em aulas ao longo do curso de Certified
              Tech Developer.
            </p>
            <p>
              Esse projeto foi uma estratégia didática que consiste na
              realização de um conjunto de atividades articuladas entre si, com
              início, desenvolvimento e fim, e que tem por objetivo desenvolver
              um site completo.
            </p>
            <h3 className="fw-bold text-primary text-center pb-3 pt-3">
              Devs do Site
            </h3>

            <div>
              <Row>
                <Col lg="4" className="about-devs ">
                  <a
                    href="https://github.com/Brunosouzad"
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex  text-decoration-none"
                  >
                    <img
                      src={bruno}
                      alt=""
                      className="img-thumbnail h-80 w-80"
                    />
                    <div>
                      <p className="ps-4 pt-4">Bruno Souza</p>
                      <p className="ps-4">Brunosouzad</p>
                    </div>
                  </a>
                </Col>
                <Col lg="4" className="about-devs ">
                  <a
                    href="https://github.com/isaiaspro"
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex  text-decoration-none"
                  >
                    <img
                      src={isaias}
                      alt=""
                      className="img-thumbnail h-80 w-80"
                    />
                    <div>
                      <p className="ps-4 pt-4">Isaias</p>
                      <p className="ps-4">isaiaspro</p>
                    </div>
                  </a>
                </Col>
                <Col lg="4" className="about-devs ">
                  <a
                    href="https://github.com/mau-sampaio"
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex  text-decoration-none"
                  >
                    <img
                      src={mauricio}
                      alt=""
                      className="img-thumbnail h-80 w-80"
                    />
                    <div>
                      <p className="ps-4 pt-4">Mauricio Sampaio</p>
                      <p className="ps-4">mau-sampaio</p>
                    </div>
                  </a>
                </Col>
                <Col lg="4" className="about-devs ">
                  <a
                    href="https://github.com/rogerio-p-silva"
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex  text-decoration-none"
                  >
                    <img
                      src={rogerio}
                      alt=""
                      className="img-thumbnail h-80 w-80"
                    />
                    <div>
                      <p className="ps-4 pt-4">Rogerio P. Silva</p>
                      <p className="ps-4">rogerio-p-silva</p>
                    </div>
                  </a>
                </Col>
                <Col lg="4" className="about-devs ">
                  <a
                    href="https://github.com/RonaldoSilva0803"
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex  text-decoration-none"
                  >
                    <img
                      src={ronaldo}
                      alt=""
                      className="img-thumbnail h-80 w-80"
                    />
                    <div>
                      <p className="ps-4 pt-4">Ronaldo Silva</p>
                      <p className="ps-4">RonaldoSilva0803</p>
                    </div>
                  </a>
                </Col>
                <Col lg="4" className="about-devs ">
                  <a
                    href="https://github.com/VanessaVieira34"
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex  text-decoration-none"
                  >
                    <img
                      src={vanessa}
                      alt=""
                      className="img-thumbnail h-80 w-80"
                    />
                    <div>
                      <p className="ps-4 pt-4">Vanessa dos Santos</p>
                      <p className="ps-4">VanessaVieira34</p>
                    </div>
                  </a>
                </Col>
              </Row>
            </div>

            <h3 className="fw-bold text-primary text-center pb-3 pt-3">
              Ferramentas Utilizadas
            </h3>
            <div>
              <Row>
                <Col lg="3">
                  <h3>Front</h3>
                  <ul>
                    <li>HTML + CSS + JS</li>
                    <li>React (Node - NPM)</li>
                    <li>Bootstrap 5.3</li>
                  </ul>
                </Col>
                <Col lg="3">
                  <h3>Back</h3>
                  <ul>
                    <li>Java</li>
                    <li>Spring</li>
                    <li>Hibernate</li>
                  </ul>
                </Col>
                <Col lg="3">
                  <h3> APIs</h3>
                  <ul>
                    <li>Rest</li>
                    <li>JSON</li>
                  </ul>
                </Col>

                <Col lg="3">
                  <h3> LIBs</h3>
                  <ul>
                    <li>react-multi-date-picker</li>
                    <li>react-hook-form</li>
                    <li>yup</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </ContainerCenter>
      <div className="videoFundo">
        <video src={video} autoPlay muted loop poster={videoBanner} />
      </div>
    </>
  );
}
