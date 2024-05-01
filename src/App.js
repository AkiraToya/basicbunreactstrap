import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import { useCounter } from "./modules/useCounter";

function App() {
  const { decrease, increase, count } = useCounter()

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
                onClick={decrease}
              >-</Button>
            </Col>
            <Col>
              <Button
                className="full-width"
                onClick={increase}
              >+</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
