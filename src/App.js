import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

function App() {
  let count = 0

  return (
    <Container>
      <Card className="margin-top-20">
        <CardBody className="center">
          <Row>
            <Col style={{
              fontSize: "1.5em"
            }}>
              Count: {count}
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button className="full-width">-</Button>
            </Col>
            <Col>
              <Button className="full-width">+</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
