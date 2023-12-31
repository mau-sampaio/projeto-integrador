import { Button, Col, Container, Form, Row } from "react-bootstrap";
import arrow from "../assets/left-arrow.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import cozinha from "../assets/itens/contem-kitchen.png";
import ar from "../assets/itens/contem-ar.png";
import estacionamento from "../assets/itens/contem-estacionamento.png";
import pet from "../assets/itens/contem-pet.png";
import tv from "../assets/itens/contem-tv.png";
import wifi from "../assets/itens/contem-wifi.png";
import piscina from "../assets/itens/piscina.png";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Este campo é obrigatorio"),
  category: yup.string().required("Este campo é obrigatorio"),
});

export function CriacaoProduto() {
  const navigate = useNavigate();
  const [imageFields, setImageFields] = useState([""]);

  const handleAddField = () => {
    setImageFields([...imageFields, ""]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...imageFields];
    updatedFields.splice(index, 1);
    setImageFields(updatedFields);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = () => {
    navigate("/criacao-produto/sucesso");
  };

  return (
    <>
      <div className="bg-secondary p-1 text-white">
        <Container>
          <Row>
            <Col lg={6}>
              <h1 className="m-0 pt-2 pb-2 fs-2">Administração</h1>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-end align-items-center"
            >
              <Link to="/">
                <img src={arrow} alt="seta de voltar" />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-gray-50">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="pt-4 fw-medium fs-3 ">Criar propriedade</h2>
                <div className="bg-white p-4 w-100 rounded">
                  <Row>
                    <Col lg={6}>
                      <Form.Group className="mb-3 w-100">
                        <Form.Label>Nome da propriedade</Form.Label>
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
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control
                          {...register("category", { required: true })}
                          isInvalid={errors.category}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.category?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="mb-3 w-100">
                        <Form.Label>Endereço</Form.Label>
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
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                          {...register("category", { required: true })}
                          isInvalid={errors.category}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.category?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mb-3 w-100">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          {...register("category", { required: true })}
                          isInvalid={errors.category}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.category?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="mb-3 w-100">
                        <Form.Label>Latitude </Form.Label>
                        <Form.Control
                          {...register("category", { required: true })}
                          isInvalid={errors.category}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.category?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="mb-3 w-100">
                        <Form.Label>Longitude </Form.Label>
                        <Form.Control
                          {...register("category", { required: true })}
                          isInvalid={errors.category}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.category?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2 className="pt-4 fw-medium fs-3 ">Adicionar atributos</h2>
                <div className="bg-white p-4 w-100 rounded">
                  <Row className="text-center ">
                    <Col xs={12} md={6} lg={3}>
                      <div className="d-flex align-items-center pb-2">
                        <Form.Check
                          type="switch"
                          id="cozinha"
                          className="pe-2"
                        />
                        <div className="d-flex align-items-center ">
                          <img
                            src={cozinha}
                            alt="icone de cozinha"
                            className="pe-2"
                          />
                          <p className="m-0 pe-2">Cozinha</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                      <div className="d-flex align-items-center pb-2">
                        <Form.Check type="switch" id="tv" className="pe-2" />
                        <div className="d-flex align-items-center">
                          <img src={tv} alt="icone de tv" className="pe-2" />
                          <p className="m-0 pe-2">Televisor</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                      <div className="d-flex align-items-center pb-2">
                        <Form.Check type="switch" id="ar" className="pe-2" />
                        <div className="d-flex align-items-center">
                          <img src={ar} alt="icone de ar" className="pe-2" />
                          <p className="m-0 pe-2">Ar condicionado</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                      <div className="d-flex align-items-center pb-2">
                        <Form.Check type="switch" id="pet" className="pe-2" />
                        <div className="d-flex align-items-center">
                          <img src={pet} alt="icone de pet" className="pe-2" />
                          <p className="m-0 pe-2">Aceita Pets</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                      <div className="d-flex align-items-center pb-2">
                        <Form.Check
                          type="switch"
                          id="estacionamento"
                          className="pe-2"
                        />
                        <div className="d-flex align-items-center">
                          <img
                            src={estacionamento}
                            alt="icone de estacionamento"
                            className="pe-2"
                          />
                          <p className="m-0 pe-2">Estacionamento</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                      <div className="d-flex align-items-center pb-2">
                        <Form.Check
                          type="switch"
                          id="piscina"
                          className="pe-2"
                        />
                        <div className="d-flex align-items-center">
                          <img
                            src={piscina}
                            alt="icone de piscina"
                            className="pe-2"
                          />
                          <p className="m-0 pe-2">Piscina</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                      <div className="d-flex align-items-center pb-2">
                        <Form.Check type="switch" id="wifi" className="pe-2" />
                        <div className="d-flex align-items-center">
                          <img
                            src={wifi}
                            alt="icone de wifi"
                            className="pe-2"
                          />
                          <p className="m-0 pe-2">Wifi</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2 className="pt-4 fw-medium fs-3 ">Politicas do produto</h2>
                <div className="bg-white p-4 w-100 rounded">
                  <Row>
                    <Col lg={4}>
                      <h2 className="fs-4 text-center">Regras da casa</h2>
                      <Form.Group className="mb-3 w-100">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="escreva aqui"
                          rows={5}
                          {...register("category", { required: true })}
                          isInvalid={errors.category}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.category?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <h2 className="fs-4 text-center">Saúde e segurança</h2>
                      <Form.Group className="mb-3 w-100">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="escreva aqui"
                          rows={5}
                          {...register("category", { required: true })}
                          isInvalid={errors.category}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.category?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <h2 className="fs-4 text-center">
                        Política de cancelamento
                      </h2>
                      <Form.Group className="mb-3 w-100">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="escreva aqui"
                          rows={5}
                          {...register("category", { required: true })}
                          isInvalid={errors.category}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.category?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2 className="pt-4 fw-medium fs-3 ">Carregar imagens</h2>

                <div className="bg-white p-4 w-100 rounded">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    {imageFields.map((image, index) => (
                      <div key={index} className="mb-3">
                        <Form.Group controlId={`formFile${index}`}>
                          <Form.Label>{`URL da imagem ${
                            index + 1
                          }`}</Form.Label>
                          <Form.Control
                            placeholder="Insira a URL da imagem"
                            {...register(`img[${index}]`, { required: true })}
                            isInvalid={errors.img && errors.img[index]}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.img && errors.img[index]?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                        {index === imageFields.length - 1 && (
                          <div className="text-right pt-2">
                            <Button
                              variant="danger"
                              type="button"
                              onClick={() => handleRemoveField(index)}
                            >
                              Remover
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="ml-auto d-flex justify-content-center">
                      <Button
                        variant="primary"
                        type="button"
                        className="fs-5"
                        onClick={handleAddField}
                      >
                        Adicionar mais imagens
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
            <div className="p-5 d-flex justify-content-center">
              <Button className="fs-4" type="submit">
                Criar Produto
              </Button>
            </div>
          </Container>
        </form>
      </div>
    </>
  );
}
