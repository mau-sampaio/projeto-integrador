import { ContainerCenter } from "../components/ContainerCenter";
import list from "../assets/listHotel.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ListaProdutos() {
  return (
    <>
      <ContainerCenter>
        <div className="rounded p-4 bg-white shadow align-self-center text-center">
          <img src={list} alt="lista hotel" />
          <h1 className="fw-bold text-primary">
            Os seus produtos ficarão aqui...
          </h1>
          <p>Você ainda não tem nenhum produto cadastro em nosso site.</p>
          <div className="ml-auto d-block">
            <Link to="/criacao-produto">
              <Button variant="primary" type="submit">
                Cadastrar um novo produto
              </Button>
            </Link>
          </div>
        </div>
      </ContainerCenter>
    </>
  );
}
