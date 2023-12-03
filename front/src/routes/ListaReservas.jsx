import { ContainerCenter } from "../components/ContainerCenter";
import globo from "../assets/globo.png";

export function ListaReservas() {
  return (
    <>
      <ContainerCenter>
        <div className="rounded p-4 bg-white shadow align-self-center text-center">
          <img src={globo} alt="globo" />
          <h1 className="fw-bold text-primary">
            As suas viagens ficarão aqui...
          </h1>
          <p>
            Essa página mostra todas as suas reservas. Se você tiver feito uma
            reserva, mas ela não estiver aqui, entre em contato com o suporte.
          </p>
        </div>
      </ContainerCenter>
    </>
  );
}
