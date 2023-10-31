import { Button, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import hide from "../../assets/hide.png";
import visible from "../../assets/visible.png";
import { useToast } from "../../context/useToast";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("email invalido").required("email obrigatorio"),
  password: yup
    .string()
    .min(7, "A senha deve ter mais que 6 caracteres.")
    .required("senha obrigatorio"),
});

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    if (data.email == "a@a.com" && data.password == "1234567") {
      navigate("/");
      showToast({ txt: "Login com Sucesso!", titulo: "Bem vindo" }, "success");
    } else
      showToast(
        {
          txt: "Por favor, tente novamente, suas credenciais são inválidas!",
          titulo: "Falha",
        },
        "danger",
      );
  };

  return (
    <form
      className="d-flex flex-column align-items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-100">
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
      </div>
      <Button variant="primary" className="ml-auto d-block" type="submit">
        Entrar
      </Button>
    </form>
  );
}
