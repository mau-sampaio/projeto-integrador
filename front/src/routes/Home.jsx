import { Col, Container, Row } from "react-bootstrap";
import { CardCategory } from "../components/CardCategory/CardCategory.jsx";
import { SectionSearch } from "../components/SectionSearch/SectionSearch.jsx";
import { CardProduct } from "../components/CardProduct/CardProduct.jsx";
import listaCard from "../mocks/lista-card.json";
import categorias from "../mocks/categorias.json";

export function Home() {
  return (
    <div className="flex-1">
      <div className="bg-secondary py-4">
        <SectionSearch />
      </div>
      <Container className="p-2">
        <h2 className="text-secondary">Buscar por tipo de acomodação</h2>
        <Row>
          {categorias.data.map((categoria, id) => {
            return (
              <Col lg={3} key={id} className="p-2">
                <CardCategory
                  urlImg={categoria.img}
                  title={categoria.title}
                  count={categoria.count}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="bg-gray-50 py-2">
        <Container>
          <h2 className="text-secondary">Recomendações</h2>
          <Row>
            {listaCard.data.map((hospedagem, id) => {
              return (
                <Col lg={6} key={id} className="p-2">
                  <CardProduct
                    category={hospedagem.category}
                    urlImg={hospedagem.img}
                    title={hospedagem.title}
                    description={hospedagem.description}
                    slug={hospedagem.slug}
                    distance={hospedagem.distance}
                    review={hospedagem.review}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
