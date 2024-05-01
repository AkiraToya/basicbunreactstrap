import { useState } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

function App() {
  const [count, setCount] = useState(0)

  const decrease = () => {
    setCount(count - 1)
    console.log("Decrease, count:", count)
  }

  const increase = () => {
    setCount(count + 1)
    console.log("Increase, count:", count)
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
