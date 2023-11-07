import { Button, Col, Container, Row } from "react-bootstrap";
import { Calendars } from "../Calendars";

export function SectionSearch() {
  return (
    <Container>
      <h1 className="text-white text-center">
        Buscar ofertas em hotéis, casas e muito mais
      </h1>
      <Row>
        <Col>
          <Row>
            <Col lg={6}>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="📌 Para onde vamos?"
              />
            </Col>
            <Col lg={6}>
              <Calendars />
            </Col>
          </Row>
        </Col>
        <Col lg="auto">
          <Button>Buscar</Button>
        </Col>
      </Row>
      <datalist id="datalistOptions">
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
      </datalist>
    </Container>
  );
}
