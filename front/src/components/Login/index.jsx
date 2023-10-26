import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ContainerCenter } from "../ContainerCenter";

export function Login() {
  return (
    <ContainerCenter>
      <Container className="h-100">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form className="d-flex flex-column align-items-center gap-4">
              <h1 className="fw-bold text-primary text-center">
                Iniciar sessão
              </h1>
              <div className="w-100">
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="email" placeholder="email@email.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-100"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="*****" />
                </Form.Group>
              </div>
              <Button
                variant="primary"
                className="ml-auto d-block"
                type="submit"
              >
                Entrar
              </Button>
              <p>
                Ainda nao tem conta? <a href="#">Registre-se</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </ContainerCenter>
  );
}
