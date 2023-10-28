import { Button, Form, Toast } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email("email invalido").required("email obrigatorio"),
  password: yup
    .string()
    .min(7, "A senha deve ter mais que 6 caracteres.")
    .required("senha obrigatorio"),
});

export function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);

  const [show, setShow] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-100">
        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            {...register("email", { required: true })}
            isInvalid={errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            {...register("password", { required: true })}
            type="password"
            isInvalid={errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      {/* <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, youre reading this text in a Toast!</Toast.Body>
      </Toast> */}

      <Button
        onClick={() => setShow(true)}
        variant="primary"
        className="ml-auto d-block"
        type="submit"
      >
        Entrar
      </Button>
    </form>
  );
}
