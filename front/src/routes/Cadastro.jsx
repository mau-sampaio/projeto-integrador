import { Col, Container, Row } from "react-bootstrap";
import { ContainerCenter } from "../components/ContainerCenter";
import { CadastroForm } from "../components/CadastroForm";

export function Cadastro() {
  return (
    <ContainerCenter>
      <Container className="h-100">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="d-flex flex-column align-items-center gap-4">
              <h1 className="fw-bold text-primary text-center">Criar conta</h1>
              <CadastroForm />
              <p>
                Já tem uma conta? <a href="#">Iniciar sessão</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </ContainerCenter>
  );
}
