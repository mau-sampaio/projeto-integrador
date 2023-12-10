import { ContainerCenter } from "../components/ContainerCenter";
import block from "../assets/block.png";

export function ListaProdutos() {
  return (
    <>
      <ContainerCenter>
        <div className="rounded p-4 bg-white shadow align-self-center text-center">
          <img src={block} alt="globo" />
          <h1 className="fw-bold text-primary">Você não é um administrador!</h1>
          <p>
            A lista de produtos só é disponivel aos usuarios Administadores. Se
            você tem um perfil administrativo, entre em contato com o suporte.
          </p>
        </div>
      </ContainerCenter>
    </>
  );
}
