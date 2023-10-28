import { Col, Container, Form, Row } from "react-bootstrap";
import { ContainerCenter } from "../ContainerCenter";
import { LoginForm } from "../LoginForm";

export function Login() {
  return (
    <ContainerCenter>
      <Container className="h-100">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="d-flex flex-column align-items-center gap-4">
              <h1 className="fw-bold text-primary text-center">
                Iniciar sessão
              </h1>
              <LoginForm />
              <p>
                Ainda nao tem conta? <a href="#">Registre-se</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </ContainerCenter>
  );
}
