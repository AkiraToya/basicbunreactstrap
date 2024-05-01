import { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

const useCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Count:", count)
  }, [count])

  const decrease = () => {
    setCount(count - 1)
  }

  const increase = () => {
    setCount(count + 1)
  }

  return {decrease, increase, count }
}

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
