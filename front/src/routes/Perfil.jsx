import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { ContainerCenter } from "../components/ContainerCenter";
import video from "../assets/video/video.mp4";
import videoBanner from "../assets/videoBanner.jpg";
import { useEffect, useState } from "react";
import { useToast } from "../context/useToast";
import usuario from "../mocks/cadastro.json";

export function Perfil() {
  const { showToast } = useToast();
  const [clickBtn, setClickBtn] = useState(false);

  useEffect(() => {
    if (clickBtn) {
      setTimeout(() => {
        setClickBtn(false);
        showToast({ txt: "Informações Salvas", titulo: "" }, "success");
      }, 2000);
    }
  }, [clickBtn]);

  const handleClick = () => {
    setClickBtn(true);
  };

  return (
    <>
      <ContainerCenter>
        <div className="rounded p-4 bg-white shadow align-self-center h100">
          <h2 className="fw-bold text-primary text-center">
            Gerenciar suas informações pessoais
          </h2>
          <Row>
            <Col lg="12" className="pb-4">
              {" "}
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder={usuario.data[0].name}
                aria-label="Disabled input example"
                autoComplete="off"
              />
            </Col>
            <Col lg="12" className="pb-4">
              {" "}
              <Form.Label>Sobrenome</Form.Label>
              <Form.Control
                type="text"
                placeholder={usuario.data[0].lastname}
                aria-label="Disabled input example"
                autoComplete="off"
              />
            </Col>
            <Col lg="12" className="pb-4">
              {" "}
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                autoComplete="off"
                type="text"
                placeholder={usuario.data[0].email}
                aria-label="Disabled input example"
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-center">
            <Button onClick={handleClick}>
              {clickBtn && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              {clickBtn ? " Salvando..." : "Salvar"}
            </Button>
          </div>
        </div>
      </ContainerCenter>
      <div className="videoFundo">
        <video src={video} autoPlay muted loop poster={videoBanner} />
      </div>
    </>
  );
}
