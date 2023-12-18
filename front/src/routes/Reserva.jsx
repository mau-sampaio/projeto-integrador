import { useParams } from "react-router-dom";
import { DetailReserva } from "../components/DetailReserva/DetailReserva";
import detalhe from "../mocks/detalhes.json";

export function Reserva() {
  const { slug } = useParams();
  return (
    <>
      <div>
        <DetailReserva
          place={detalhe.data.find((produto) => slug == produto.slug)}
        />
      </div>
    </>
  );
}
