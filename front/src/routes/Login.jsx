import { Col, Container, Row } from "react-bootstrap";
import { ContainerCenter } from "../components/ContainerCenter";
import { LoginForm } from "../components/LoginForm";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <ContainerCenter>
      <Container className="h-100">
        <Row className="justify-content-center">
          <Col lg={6}>
            <div>
              <h1 className="fw-bold text-primary text-center">
                Iniciar sessão
              </h1>
              <LoginForm />
              <p className="text-center mt-4">
                Ainda nao tem conta? <Link to="/cadastro">Registre-se</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </ContainerCenter>
  );
}
