import { Col, Container, Row } from "react-bootstrap";
import { ContainerCenter } from "../components/ContainerCenter";
import { CadastroForm } from "../components/CadastroForm";
import { Link } from "react-router-dom";

export function Cadastro() {
  return (
    <ContainerCenter>
      <Container className="h-100">
        <Row className="justify-content-center">
          <Col lg={6}>
            <div>
              <h1 className="fw-bold text-primary text-center">Criar conta</h1>
              <CadastroForm />
              <p className="text-center mt-4">
                Já tem uma conta? <Link to="/login">Iniciar sessão</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </ContainerCenter>
  );
}
