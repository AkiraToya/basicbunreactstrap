import { Card, CardBody, Container } from "reactstrap";
import { useCounter } from "./modules/useCounter";
import { CountLabel } from "./components/CountLabel.tsx";
import { CountControl } from "./components/CountControl";

function App() {
  const { decrease, increase, count } = useCounter()

  return (
    <Container>
      <Card className="margin-top-20">
        <CardBody className="center">
          <CountLabel count={count} />
          <br />
          <CountControl
            decreaseFn={decrease}
            increaseFn={increase} 
          />
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
