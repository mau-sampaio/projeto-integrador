import { DetailCard } from "../components/DetailCard/DetailCard";
import detalhe from "../mocks/detalhes.json";

export function Produto() {
  return (
    <>
      <div>
        <DetailCard place={detalhe.data} />
      </div>
    </>
  );
}
