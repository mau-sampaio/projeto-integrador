import { DetailReserva } from "../components/DetailReserva/DetailReserva";
import detalhe from "../mocks/detalhes.json";

export function Reserva() {
  return (
    <>
      <div>
        <DetailReserva place={detalhe.data} />
      </div>
    </>
  );
}
