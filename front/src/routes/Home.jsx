import { Col, Container, Row } from "react-bootstrap";
import { CardCategory } from "../components/CardCategory/CardCategory.jsx";
import { SectionSearch } from "../components/SectionSearch/SectionSearch.jsx";
import { CardProduct } from "../components/CardProduct/CardProduct.jsx";

export function Home() {
  return (
    <div className="flex-1">
      <div className="bg-secondary py-4">
        <SectionSearch />
      </div>
      <Container className="p-2">
        <h2 className="text-secondary">Buscar por tipo de acomodação</h2>
        <Row>
          <Col lg={3} className="p-2">
            <CardCategory />
          </Col>
          <Col lg={3} className="p-2">
            <CardCategory />
          </Col>
          <Col lg={3} className="p-2">
            <CardCategory />
          </Col>
          <Col lg={3} className="p-2">
            <CardCategory />
          </Col>
        </Row>
      </Container>
      <div className="bg-gray-50 py-2">
        <Container>
          <h2 className="text-secondary">Recomendações</h2>
          <Row>
            <Col lg={6} className="p-2">
              <CardProduct />
            </Col>
            <Col lg={6} className="p-2">
              <CardProduct />
            </Col>
            <Col lg={6} className="p-2">
              <CardProduct />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
