import { Button, Form } from "react-bootstrap";

export function CadastroForm() {
  return (
    <form>
      <div className="w-100">
        <Form.Group className="mb-3 w-100" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formBasicSurname">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
          <Form.Label>Confirmar senha</Form.Label>
          <Form.Control />
        </Form.Group>
      </div>
      <Button variant="primary" className="ml-auto d-block" type="submit">
        Criar conta
      </Button>
    </form>
  );
}
