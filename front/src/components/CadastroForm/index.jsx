import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import hide from "../../assets/hide.png";
import visible from "../../assets/visible.png";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Este campo é obrigatorio"),
  lastname: yup.string().required("Este campo é obrigatorio"),
  email: yup.string().email("email invalido").required("email obrigatorio"),
  password: yup
    .string()
    .min(7, "A senha deve ter mais que 6 caracteres.")
    .required("senha obrigatoria"),
  confirmPassword: yup
    .string()
    .min(7, "A senha deve ter mais que 6 caracteres.")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    .required("senha obrigatoria"),
});

export function CadastroForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className="d-flex flex-column align-items-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-100">
        <Row>
          <Col lg={6}>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                {...register("name", { required: true })}
                isInvalid={errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Sobrenome</Form.Label>
              <Form.Control
                {...register("lastname", { required: true })}
                isInvalid={errors.lastname}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastname?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3 w-100">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            {...register("email", { required: true })}
            isInvalid={errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 w-100">
          <Form.Label>Senha</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              isInvalid={errors.password}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="iconButton"
            >
              <img src={showPassword ? visible : hide} alt="" />
            </button>
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3 w-100">
          <Form.Label>Confirmar Senha</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type={showPasswordConfirm ? "text" : "password"}
              {...register("confirmPassword", { required: true })}
              isInvalid={errors.confirmPassword}
            />
            <button
              type="button"
              onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
              className="iconButton"
            >
              <img src={showPasswordConfirm ? visible : hide} alt="" />
            </button>
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword?.message}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </div>
      <div className="ml-auto d-block">
        <Link to="/cadastro/sucesso">
          <Button variant="primary" type="submit">
            Criar conta
          </Button>
        </Link>
      </div>
    </form>
  );
}
