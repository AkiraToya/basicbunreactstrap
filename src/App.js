import { Button, Card, CardBody, Container } from "reactstrap";
import { useCounter } from "./modules/useCounter";
import { CountLabel } from "./components/CountLabel.tsx";
import { CountControl } from "./components/CountControl.tsx";
import { memo, useState } from "react";

function App() {
  const { decrease, increase, count } = useCounter()
  const [year, setYear] = useState(2024)

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
      <Copyright year={year} />
      <Button className="full-width"
        onClick={() => setYear(year+1)}>
        Update Year
      </Button>
    </Container>
  );
}

const Copyright = memo(({year}) => <div style={{
  textAlign: "center"
}}>Copyright @{year}</div>)

export default App;
