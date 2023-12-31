import { useParams } from "react-router-dom";
import { DetailCard } from "../components/DetailCard/DetailCard";
import detalhe from "../mocks/detalhes.json";

export function Produto() {
  const { slug } = useParams();
  return (
    <>
      <div>
        <DetailCard
          place={detalhe.data.find((produto) => slug == produto.slug)}
          slug={slug}
        />
      </div>
    </>
  );
}
