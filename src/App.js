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
              <Button
                className="full-width"
                onClick={() => {
                  console.log("Decrease")
                }}
              >-</Button>
            </Col>
            <Col>
              <Button
                className="full-width"
                onClick={() => {
                  console.log("Increase")
                }}
              >+</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
