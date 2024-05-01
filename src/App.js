import { useState } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

function App() {
  const [count, setCount] = useState(0)

  const decrease = () => {
    console.log("Decrease")
    setCount(count - 1)
  }

  const increase = () => {
    console.log("Increase")
    setCount(count + 1)
  }

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
